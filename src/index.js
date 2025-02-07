// require('dotenv').config({path: './env'}) // it can be used and it's fully correct code but new method is aslo there ..

import dotenv from 'dotenv' 

import mongoose from "mongoose";
import {DB_NAME} from './constants.js'

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()























/*
import express from 'express'

// function connectDB(){

// } also this syntax can be used

const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error",(error) => {
                console.log("Error:" , error);
                throw error
            }) 

         app.listen(process.env.PORT , () =>{
            console.log(`App is listening on ${process.env.PORT}`);
            
         })
        
    } catch (error) {
        console.log("ERROR :" , error);        
        throw err 
    }
})()
*/