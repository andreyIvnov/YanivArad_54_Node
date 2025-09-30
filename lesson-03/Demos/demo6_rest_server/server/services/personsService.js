/* Data Source */
const persons = [
  { id: 1, name: 'Avi', age: 40 },
  { id: 2, name: 'Ron', age: 22 },
  { id: 3, name: 'Dana', age: 34 },
  { id: 4, name: 'Gili', age: 19 },
];

/* CRUD - Create, Read, Update, Delete */

// Get All - Read
const getAllPersons = () => {
  return persons;
};

// Get By ID - Read
const getPersonById = (id) => {
  const person = persons.find((per) => per.id === +id);
  // find() returns 'undefined' if no item met the condition
  return person || 'Wrong ID!';
};

// Add - Create
const addPerson = (newPer) => {
  persons.push(newPer);
  return 'Created!';
};

// Update
const updatePerson = (id, data) => {
  const index = persons.findIndex((per) => per.id === +id);
  // findIndex() returns '-1' if no item met the condition
  if (index !== -1) {
    persons[index] = data;
    return 'Updated!';
  }
  return 'Wrong ID!';
};

// Delete
const deletePerson = (id) => {
  const index = persons.findIndex((per) => per.id === +id);
  if (index !== -1) {
    persons.splice(index, 1);
    return 'Deleted!';
  }
  return 'Wrong ID!';
};

module.exports = {
  getAllPersons,
  getPersonById,
  addPerson,
  updatePerson,
  deletePerson,
};
