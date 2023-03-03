import express from "express";
import mongoose from "mongoose";
import userRoute from "./Routes/userRoute.js"
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/todo").then(()=>{
    console.log("db connected")
}).catch((error)=>console.log("error"))

app.listen(4000,()=>console.log("server on port 4000"))

app.use('/',userRoute);