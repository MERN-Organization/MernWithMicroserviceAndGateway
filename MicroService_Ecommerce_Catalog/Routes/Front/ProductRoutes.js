const express = require('express');
const { getAllProducts } = require('../../Controllers/ProductController/productController');

const router = express.Router();

router.get("/",getAllProducts)


module.exports = router;