const mongoose = require('mongoose')
const connectDB = async (url) =>{
    try {
        await mongoose.connect(url)
        console.log("mongoDB connected...");
        
    } catch (error) {
        console.log("mongoDB is not Connect", error.message);
        
    }
}
module.exports = {
    connectDB
}