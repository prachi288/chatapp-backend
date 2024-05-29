const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGO_URL
}