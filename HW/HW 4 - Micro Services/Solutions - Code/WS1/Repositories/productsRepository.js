const axios = require("axios")

const url = "http://localhost:8000/products"

const getProds = async () => {
   return axios.get(url)
}

module.exports = {getProds}