// config/db.js
import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const dbURI = process.env.MONGODB_URI;


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://iamyathz:Hire123@cluster0.lorwk.mongodb.net/'); 
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err.message);
    process.exit(1);
  }
};

export default connectDB;
