import express from 'express'


dotenv.config()
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
const port = process.env.PORT

connectDB()

const app = express()

app.get('/',(req,res)=>{
    res.send("Api is running")
})
app.use('/api/products',productRoutes)

app.use(errorHandler)
app.use(notFound)


app.listen(port,()=>console.log(`POrt running at ${port}`))