import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {connectDB} from './config/db.js';
import mongoose from 'mongoose';


dotenv.config();

const app = express();
connectDB();

const testSchema = new mongoose.Schema({ message: String });
const Test = mongoose.model('Test', testSchema);

await Test.create({ message: 'Hello ECONANOCAT!' });
console.log('✅ Test collection created successfully');

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
