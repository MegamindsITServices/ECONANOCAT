import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import {connectDB} from './config/db.js';
import contactUsRoutes from './routes/contactRoute.js';

dotenv.config();

const app = express();
connectDB();

// Middleware
app.use(cors({ origin:[
    "https://econanocat.com", 
    "https://www.econanocat.com"
  ], credentials: true }));
app.use(express.json());

app.use('/api/contact', contactUsRoutes);
app.use('/', (req, res) => {
  res.send('ECONANOCAT');
});

// Server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
