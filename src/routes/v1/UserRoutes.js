const express = require('express');
const {UserController}=require('../../controller');
const {UserMiddleware}=require('../../middleware');
const router = express.Router();
console.log("Inside Routes");

router.post('/create',UserController.userRegister);

module.exports = router;