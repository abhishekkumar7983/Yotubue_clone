import mongoose from "mongoose";
import express from "express";
import {DB_NAME} from "../constants.js";

const connectDB = async()=>{
try{
console.log("MongoDB URI :", process.env.MONGODB_URI);  // Add this line
const connectionInstance=mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
console.log(`mongodb connected!! DB host : ${connectionInstance}`);
}
catch(error){
 console.error("error in Mongodb connection",error);
 process.exit(1);
}
}
export default connectDB;