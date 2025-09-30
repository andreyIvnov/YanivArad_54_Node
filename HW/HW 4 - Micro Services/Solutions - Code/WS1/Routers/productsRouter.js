const express = require('express');
const router = express.Router()

const ProductsService = require("../Services/productsService")

router.get("/", async (req, res) => {
    const data = await ProductsService.getAllData()
    console.log(data)
    return res.json(data)
})

module.exports = router
