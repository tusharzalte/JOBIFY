import express from 'express';
import "express-async-errors"
import morgan from 'morgan';
import dotenv from 'dotenv';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js'
import notFoundMiddleware from './middleware/not-found.js';
import connectToMongo from './db.js';
import authRouter from './Routes/authRoutes.js';
import jobRouter from './Routes/jobsRouter.js';
import cookieParser from 'cookie-parser';
connectToMongo();
const app = express();
app.use(cookieParser());
dotenv.config();

if(process.env.NOD_ENV !== 'production')
{
    app.use(morgan('dev'))
}

app.use(express.json());

app.get('/', (req, res) => {
    res.json({msg:'HELLO!'});
});
app.get('/api/v1', (req, res) => {
    res.json({msg:'API!'});
});
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/job',authenticateUser,jobRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})