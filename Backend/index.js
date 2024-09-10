import express from "express";
import cookieParser  from "cookie-parser";
import cors from "cors"
import dotEnv from "dotenv";
import connectDb from "./utils/db.js";

dotEnv.config({});

const app = express();

app.use(express.json);
app.use(express.urlencoded({extended:true})); 
app.use(cookieParser);

const corsOption = {
    origin : 'http//localhost:5173',
    Credential : true
}

app.use(cors(corsOption));


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    connectDb();
    console.log(`Service running at port ${PORT}`);

})