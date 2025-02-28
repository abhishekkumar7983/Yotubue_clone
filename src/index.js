import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js"
dotenv.config({
path:'./env'
})

connectDB()
.then(()=>{
app.on("error",(error)=>{
   console.error("error in connecting database",error)
   throw error;
   });
app.listen(process.env.PORT || 8000,()=>{
console.log(`app is running on the server : ${process.env.PORT}`);
})
})
.catch((err)=>{
   console.log("mongo db connection failed !!!!",err);
})







































// another way of connecting mongodb database
/*
import express from "express";
const app =express();
(async ()=>{
   try{
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
   app.on("error",(error)=>{
   console.error("error in connecting database",error)
   throw error;
   });
   app.listen(process.env.PORT,()=>{
   console.log(`application is running on ${process.env.PORT}`);
   })
    }

    catch(error){
    console.error("Error" ,error);
    throw error;
    }
})()
*/
