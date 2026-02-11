import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('connected to MongoDB!');
})
.catch((err) => {
    console.log(err);
})

const app = express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(cookieParser())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})


const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!!!`)
})





