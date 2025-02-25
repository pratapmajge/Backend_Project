// require('dotenv').config({path: './.env'}) // it can be used and it's fully correct code but new method is aslo there ..
import express from 'express'
import dotenv from 'dotenv' 
import connectDB from "./db/index.js"

dotenv.config({
    path: './.env'
})

const app= express()
connectDB() //it is async function after async there is always .then and .catch so..
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`server is running at port: ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB Connection failed  !!" , err);
});


//




// in db folder i've written this code to avoid complication in main index file 
/*
import express from 'express'

// function connectDB(){

// } also this syntax can be used

const app = express()

;(async () => {
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