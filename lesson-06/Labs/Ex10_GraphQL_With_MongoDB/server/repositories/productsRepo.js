const Product = require('../models/productModel');

const getProducts = (filters) => {
    return Product.find(filters);
}

const getProductById = (id) => {
    return Product.findById(id);
}

const addProduct = (obj) => {
    return Product.create(obj);
}

const updateProduct = (id,obj) => {
    return Product.findByIdAndUpdate(id, obj);
}

const deleteProduct = (id) => {
    return Product.findByIdAndDelete(id);
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
}