const express = require('express');
const { getAllProducts, getProductById } = require('../../Controllers/ProductController/productController');

const router = express.Router();

router.get("/:productId",getProductById)
router.get("/",getAllProducts)


module.exports = router;