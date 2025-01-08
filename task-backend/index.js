import express from "express";
import connectDB from "./db/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

//app & port
const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: 'http://localhost:3000' }));

//database connection
connectDB();

// Middleware for parsing JSON
app.use(express.json());

//routes
app.use("/api/user", userRoutes);

app.listen(port,()=> {
    console.log("Server is listening on port ",port);
})