const CrudRepository=require('./Crud-repository');
const {User}=require('../models/userModel');

class UserRepository extends CrudRepository{
    constructor(){
        console.log("Inside user repo")
        super(User);
    }
    async getUserByEmail(email) {
        const user = await User.findOne({ username, email });
        return user;
    }
}

module.exports= UserRepository;