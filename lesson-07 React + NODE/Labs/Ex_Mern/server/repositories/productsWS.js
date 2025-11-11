const Product = require('../models/productModel');

const getAllProducts = (filters) => Product.find(filters);

const getProductById = (id) => Product.findById(id);

const addProduct = (obj) => Product.create(obj);

const updateProduct = (id, obj) => Product.findByIdAndUpdate(id, obj);

const deleteProduct = (id) => Product.findByIdAndDelete(id);

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}