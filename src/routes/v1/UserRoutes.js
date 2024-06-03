const express = require('express');
const {UserController}=require('../../controller');
const {UserMiddleware}=require('../../middleware');
const router = express.Router();
console.log("Inside Routes");

router.post('/create',UserMiddleware.validateCreateRequest, UserController.userRegister);

module.exports = router;