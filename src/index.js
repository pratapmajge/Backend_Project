import mongoose from "mongoose";
import {DB_NAME} from './constants.js'

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