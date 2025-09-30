const axios = require('axios');

const PRODUCTS_ENDPOINT = "https://fakestoreapi.com/products";

const getMinimalProductsData = async () => {
    const { data } = await axios.get(PRODUCTS_ENDPOINT);
    return data.map(prod => {
        return { id: prod.id, title: prod.title }
    })
}

module.exports = {
    getMinimalProductsData
}