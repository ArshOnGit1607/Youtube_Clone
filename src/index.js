import dotenv from 'dotenv';
import connectDB from './db/setup.js';

dotenv.config({
    path: './src/.env'
});

connectDB();