const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch(error){
        console.log("MONGODB connection FAILED",error);
        process.exit(1); // Exit with failure
    }
}

module.exports = connectDB;
