import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("error" , error);
        process.exit(1);
    }
}