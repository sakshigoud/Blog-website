
import mongoose from "mongoose";

const port = process.env.PORT;

const connectdb = async () => {
    try {
        const url = process.env.MONGO_URL || `mongodb://localhost:27017/blog`;
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('error to connect to mongodb:', error);
    }

}

export default connectdb;
