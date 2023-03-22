const express = require('express');
const router = express.Router();
const UserRoutes = require('./UserRoutes');
const ProductRoutes = require("./ProductRoutes")

router.use('/user', UserRoutes);
router.use('/product', ProductRoutes);

module.exports = router;
