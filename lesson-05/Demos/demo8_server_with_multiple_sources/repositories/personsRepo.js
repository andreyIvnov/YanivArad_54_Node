const Person = require('../models/personModel');

const getAllPersons = (filters) => {
  return Person.find(filters);
};

const getPersonById = (id) => {
  return Person.findById(id);
};

const addPerson = (obj) => {
  return Person.create(obj);
};

const updatePerson = (id, obj) => {
  return Person.findByIdAndUpdate(id, obj);
};

const deletePerson = (id) => {
  return Person.findByIdAndDelete(id);
};

module.exports = {
  getAllPersons,
  getPersonById,
  addPerson,
  updatePerson,
  deletePerson,
};
