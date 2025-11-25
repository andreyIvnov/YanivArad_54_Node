const express = require("express");
const usersService = require("../services/usersService")

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await usersService.getAll();
        res.send(data);
    } catch (error) {
        console.log(error);
        
        res.status(500).send(error)
    }
})

module.exports = router;