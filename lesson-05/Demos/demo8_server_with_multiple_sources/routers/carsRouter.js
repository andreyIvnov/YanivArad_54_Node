const express = require('express');
const carsService = require('../services/carsService');

const router = express.Router();

// Entry Point: http://localhost:3000/cars

// Get All
router.get('/', async (req, res) => {
  try {
    const cars = await carsService.getAllCars();
    res.send(cars);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a new car
router.post('/', async (req, res) => {
  try {
    const carObj = req.body;
    const newCar = await carsService.addCar(carObj);
    res.status(201).send(`The new ID: ${newCar.id}`);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
