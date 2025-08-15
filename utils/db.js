const mongoose  = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const DBconnection = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connection successfully");
    } catch (error) {
        console.log("Error in DB connection")
    }
}

module.exports = DBconnection