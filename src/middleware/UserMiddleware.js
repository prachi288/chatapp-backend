const { StatusCodes } = require('http-status-codes');
const {User}=require('../models/userModel')
const {jwt}=require('jsonwebtoken')
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');
const {UserService}=require('../service')

function validateCreateRequest(req, res, next) {
    console.log("inside airplane middleware")    
    if(!req.body.ModelNumber) {
        ErrorResponse.message = 'Something went wrong while creating airplane';
        ErrorResponse.error = new AppError(['Model Number not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

async function checkAuth(req, res, next) {
    try {
        const response = await UserService.isAuthenticated(req.headers['x-access-token']);
        if(response) {
            req.user = response; // setting the user id in the req object
            next();
        }
    } catch(error) {
        return res
                .status(error.statusCode)
                .json(error);
    }

}

module.exports = {
    validateCreateRequest,
    checkAuth
}