const productRepo = require('../repositories/productsWS');

const getAllProducts = (filter) => productRepo.getAllProducts(filter);
const getProductById = (id) => productRepo.getProductById(id);
const addProduct = (prodObj) => productRepo.addProduct(prodObj);
const updateProduct = (id, prodObj) => productRepo.updateProduct(id, prodObj);
const deleteProduct = (id) => productRepo.deleteProduct(id);

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
}