const personsRepo = require('../repositories/personsRepo');

// Get All - Read
const getAllPersons = (filters) => {
  return personsRepo.getAllPersons(filters);
};

const getAllCities = async () => {
  try {
    const persons = await personsRepo.getAllPersons();
    const cities = persons.map((per) => per.city);
    return cities;
  } catch (error) {
    throw error;
  }
};

// Get By ID - Read
const getPersonById = (id) => {
  return personsRepo.getPersonById(id);
};

// Add - Create
const addPerson = (newPer) => {
  return personsRepo.addPerson(newPer);
};

// Update
const updatePerson = (id, data) => {
  return personsRepo.updatePerson(id, data);
};

// Delete
const deletePerson = (id) => {
  return personsRepo.deletePerson(id);
};

module.exports = {
  getAllPersons,
  getAllCities,
  getPersonById,
  addPerson,
  updatePerson,
  deletePerson,
};
