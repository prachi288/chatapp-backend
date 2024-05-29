const mongoose = require("mongoose");
const { MONGO_URL } = require("./serverConfig");

const dbConnect = async()=>{
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error in Connecting DB");
        console.log(error);
        throw error;
    }
}

module.exports = dbConnect;