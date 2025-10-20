const express = require('express');
const usersService = require('../services/usersService');

const router = express.Router();

// Entry Point: http://localhost:3000/users

// Get All
router.get('/', async (req, res) => {
  try {
    const filters = req.query;
    const users = await usersService.getAllUsers(filters);
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
