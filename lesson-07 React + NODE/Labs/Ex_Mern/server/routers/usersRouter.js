const express = require('express');
const usersService = require('../services/usersService');

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const {data} = await usersService.getAllUsers();
        res.send(data)  // Send only the data from axios response
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;