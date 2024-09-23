import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Call express.json as a function
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Call cookieParser as a function

// CORS configuration
const corsOption = {
    origin: 'http://localhost:5173', // Fixed typo in origin URL
    credentials: true // Corrected 'Credential' to 'credentials'
};

app.use(cors(corsOption));

// Connect to the database before starting the server
connectDb();

const PORT = process.env.PORT || 3000;

// User route
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Service running at port ${PORT}`);
});
