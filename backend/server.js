import express from 'express'


dotenv.config()
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
const port = process.env.PORT

connectDB()

const app = express()

app.get('/',(req,res)=>{
    res.send("Api is running")
})
app.use('/api/products',productRoutes)


app.listen(port,()=>console.log(`POrt running at ${port}`))