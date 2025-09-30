const orderRepository = require("../Repositories/ordersRepository")
const productsRepository = require("../Repositories/productsRepository")


const getAllData = async () => {
    const { data: products } = await productsRepository.getProds()
    const { orders } = await orderRepository.getProds()

  const finalData =   products.map(prod => {

        const order = orders.find(order => order.productId === prod.id)

        if (order) {
            const finalProduct = { ...prod, orders: { amount: order.amount, orderData: order.orderData } }
            return finalProduct
        } 
        return {...prod, orders: {}}
    })

    return finalData
    

}

module.exports = {getAllData}
