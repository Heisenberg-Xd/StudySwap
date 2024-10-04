// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createProduct);
router.get('/', getProducts);

module.exports = router;
