import express from 'express';
const router = express.Router();
import asynchandler from '../middleware/asyncHandler.js';
import { getProductById, getProducts } from '../controllers/productController.js';



router.route('/').get(asynchandler(getProducts));
router.route('/:id').get(asynchandler(getProductById));

export default router