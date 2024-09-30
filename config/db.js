const mongoose = require("mongoose")
const colors = require("colors")


const connectDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`connected to mongodb Database ${mongoose.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`MONGODB Connect Error ${error}`.bgRed.white)
    }
}


module.exports = connectDB;
