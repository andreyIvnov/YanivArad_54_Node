const express = require('express');
const usersService = require('../services/usersService');

const router = express.Router();

// Entry Point: http://localhost:3000/users

router.get('/', async (req, res) => {
  try {
    const users = await usersService.getAllUsers();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
