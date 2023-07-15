import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorHandler.js';
const port = process.env.PORT;
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

connectDB();

const app = express();

app.use(express.json()) // send raw json through postman
app.use(express.urlencoded({extended: true})) // send formdata through postman

app.use(cookieParser())

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

// error middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
