const express = require('express');
const productsService = require('../services/productsService')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const queries = req.query;
        const products = await productsService.getAllProducts(queries);
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await productsService.getProductById(id);
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/', async (req, res) => {
    try {
        const prodObj = req.body;
        const newProd = await productsService.addProduct(prodObj);
        res.status(200).send(newProd);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const prodObj = req.body;
        const resultOfUpd = await productsService.updateProduct(id, prodObj);
        res.send(resultOfUpd);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productsService.deleteProduct(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;