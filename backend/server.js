import express from 'express'


dotenv.config()
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import cookieParser from 'cookie-parser'
const port = process.env.PORT

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("Api is running")
})
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)

app.use(errorHandler)
app.use(notFound)


app.listen(port,()=>console.log(`POrt running at ${port}`))