import mongoose from 'mongoose';

export const connectDatabase = async () => {
    try {
        console.log('checking the MONGO_URI',process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI!);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
