import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(express.json())
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users" , userRouter) //inside quotes initial path is defined we can give a single name or multiple i've given 3 names it is said as best practices

// http://localhost:8000/api/v1/users/register
export {app}