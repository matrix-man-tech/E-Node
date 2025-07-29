import express from 'express'
import products from './product.js'
dotenv.config()
import dotenv from 'dotenv'
const port = process.env.PORT

const app = express()

app.get('/',(req,res)=>{
    res.send("Api is running")
})
app.get('/api/products',(req,res) =>{
    res.json(products)
})
app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(port,()=>console.log(`POrt running at ${port}`))