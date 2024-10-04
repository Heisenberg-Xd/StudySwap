// controllers/productController.js
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    const product = new Product({ name, description, price, userId: req.user.id });
    await product.save();
    res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
    const products = await Product.find().populate('userId', 'username');
    res.json(products);
};
