import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n✅ MongoDB Connected! 🚀 DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("🔥 MongoDB Connection Failed:", error.message);
        process.exit(1); // Exit the process if DB connection fails
    }
};

export default connectDB;