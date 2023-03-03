import express from "express";
import mongoose from "mongoose";
import userRoute from "./Routes/userRoute.js"

const app = express();

mongoose.connect("mongodb://localhost:27017/todo").then(()=>{
    console.log("db connected")
}).catch((error)=>console.log("error"))

app.listen(4000,()=>console.log("server on port 4000"))

app.use('/user',userRoute);