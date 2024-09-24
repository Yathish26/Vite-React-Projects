// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://iamyathz:Hirearrive123@cluster0.lorwk.mongodb.net/s'); // Removed deprecated options
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err.message);
    process.exit(1);
  }
};

export default connectDB;
