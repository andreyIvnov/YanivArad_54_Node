const carsRepo = require('../repositories/carsRepo');
const { v4: uuidv4 } = require('uuid');

// Get All
const getAllCars = () => {
  return carsRepo.getCars();
};

const addCar = async (car) => {
  try {
    const cars = await getAllCars();
    const newCar = { id: uuidv4(), ...car };
    cars.push(newCar);
    await carsRepo.setCars(cars);
    return newCar;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCars,
  addCar,
};
