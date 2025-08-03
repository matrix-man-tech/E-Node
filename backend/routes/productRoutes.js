import express from 'express';
const router = express.Router();
import asynchandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';


router.get('/',asynchandler(async(req,res) =>{
    const products = await Product.find({})
    res.json(products)
}))
router.get('/:id',asynchandler(async(req,res)=>{
   const product = await Product.findById(req.params.id)
   if (product){
        return res.json(product)
   }   
})
)

export default router