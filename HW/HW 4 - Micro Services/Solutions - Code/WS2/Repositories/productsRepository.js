const axios = require("axios")
const url = "https://fakestoreapi.com/products"

const getProducts = () => {
    return axios.get(url)
}

module.exports = {getProducts}