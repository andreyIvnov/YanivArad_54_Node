const productsRepository = require("../Repositories/productsRepository.js")

const getAllProducts = async () => {
    const {data} = await productsRepository.getProducts()
    
    const products = data.map(p => {
        return {id: p.id, title: p.title}
    })
    return products
}

module.exports = {getAllProducts}