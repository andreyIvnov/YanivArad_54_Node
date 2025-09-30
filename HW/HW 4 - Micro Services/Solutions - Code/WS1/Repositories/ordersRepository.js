const jFile = require("jsonfile")

const path = require("path")
const filePath = path.join(__dirname, "../data/orders.json")

const getProds = async () => {
   return jFile.readFile(filePath)
}

module.exports = {getProds}