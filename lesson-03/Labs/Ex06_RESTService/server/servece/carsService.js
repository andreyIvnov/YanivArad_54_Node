const cars = [
    { id: 1, model: 'Toyota', year: 2010, color: 'Red' },
    { id: 2, model: 'Honda', year: 2015, color: 'Blue' },
    { id: 3, model: 'Ford', year: 2018, color: 'Black' },
    { id: 4, model: 'Chevrolet', year: 2020, color: 'White' },
];

const getAllCars = () => {
    return cars;
}

const getCarById = (id) => {
    const car = cars.find(c => c.id === +id);
    return car || 'Wrong ID!';
}

const addCar = (newCar) => {
    cars.push(newCar);
    return 'Created!';
}

const updateCar = (id, data) => {
    const indexOfFoundCar = cars.findIndex(c => c.id === +id);
    if (indexOfFoundCar !== -1) {
        cars[indexOfFoundCar] = data;
        return 'Updated!';
    }
    return 'Wrong ID!';
}

const deleteCar = (id) => {
    const foundCarIndex = cars.findIndex(c => c.id === +id);
    if (foundCarIndex !== -1) {
        cars.splice(foundCarIndex, 1);
        return 'Deleted!';
    }
    return 'Wrong ID!';
}

module.exports = {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar,
}