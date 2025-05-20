// Import Modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import DB
import DB_Connection from "./config/DB_Config.js";

// Import Routes
import ProductRoute from './routes/product.route.js';
import UserRoute from './routes/user.route.js';

// Env Config
dotenv.config();

// Prop Variables
const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.use(express.json());
app.use(cookieParser());

// CORS
const corsOptions = {
    credentials: true,
    origin: process.env.CORS_ORIGIN_URL,
    method: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));

// Routes

// Product Routes
app.use('/', ProductRoute);

// User Routes
app.use('/', UserRoute);

// Sever listen
app.listen(port, () => {
    console.log(`Server runs on ${port}`);
});