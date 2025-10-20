const personsRepo = require('../repositories/personsRepo');

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

const getPersonById = (id) => {
  return personsRepo.getPersonById(id);
};

const addPerson = (newPer) => {
  return personsRepo.addPerson(newPer);
};

const updatePerson = (id, data) => {
  return personsRepo.updatePerson(id, data);
};

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
