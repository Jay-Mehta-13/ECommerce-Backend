import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected Successfully")
    } catch (error) {
        console.log("Something Went Wrong");      
    }
}

export default connectMongo
