const ordersFile = require('../repositories/ordersFile');
const productsWS = require('../repositories/productsWS');

const getProductsInfo = async () => {
    const { products: ordersDataFromFile } = await ordersFile.getOrdersFromFile();
    const minimalProductsData = await productsWS.getMinimalProductsData();

    const dataReturn = minimalProductsData.map(prodMin => {
        const productExistInFile = ordersDataFromFile.find(ordProd => prodMin.id === ordProd.id)
        if (productExistInFile) {
            return { id: prodMin.id, title: prodMin.title, orders: { amount: productExistInFile.amount, orderDate: productExistInFile.orderDate } };
        }else{
            return {id: prodMin.id, title: prodMin.title, orders: {}};
        }
    })
    return dataReturn;
}

module.exports = {
    getProductsInfo
}

