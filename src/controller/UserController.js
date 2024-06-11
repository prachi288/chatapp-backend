const {StatusCodes}=require('http-status-codes');
const {UserService}=require('../service');

const{SuccessResponse,ErrorResponse}=require('../utils/common');

/**
 * POST : /user
 */

async function userRegister(req,res){
    console.log("Inide controller");
     try{
        const user=await UserService.userRegister({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            gender: req.body.gender,
            password: req.body.password,
            profilepic: req.body.profilepic
        })
        SuccessResponse.data= user;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
     }catch(error){
        console.log("error")
        ErrorResponse.error=error;
        return res
                 .status(error.statusCode)
                 .json(ErrorResponse);
     }
}
module.exports={
    userRegister
}