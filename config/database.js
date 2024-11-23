import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MongoDB_URI);
        console.log(`Database Connected Successfully: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;