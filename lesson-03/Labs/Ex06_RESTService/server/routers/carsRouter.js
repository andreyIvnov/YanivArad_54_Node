const express = require('express');
const carsService = require('../servece/carsService');

const router = express.Router();

router.get('/', (req, res) => {
    const cars = carsService.getAllCars();
    res.send(cars);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const car = carsService.getCarById(id);
    res.send(car);
})

router.post('/', (req, res) => {
    const carObj = req.body;
    const result = carsService.addCar(carObj);
    res.send(result)
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = carsService.updateCar(id, data);
    res.send(result);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const result = carsService.deleteCar(id);
    res.send(result);
})

module.exports = router;