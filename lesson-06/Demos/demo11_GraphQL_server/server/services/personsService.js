/* Static Data */
const persons = [
  { id: 1, name: 'Avi', age: 20 },
  { id: 2, name: 'Dana', age: 30 },
  { id: 3, name: 'Yael', age: 40 },
];

const getAllPersons = () => {
  return persons;
};

const getPersonsOlderThan = (args) => {
  const { age } = args;
  return persons.filter((p) => p.age > age);
};

const getPersonById = (args) => {
  const { id } = args;
  return persons.find((p) => p.id === id);
};

const addPerson = (args) => {
  const { per } = args;
  persons.push(per);
  return 'Created';
};

const updatePerson = (args) => {
  const { per } = args;
  const index = persons.findIndex((p) => p.id === per.id);
  if (index !== -1) {
    // persons[index] = per; // PUT
    persons[index] = { ...persons[index], ...per }; // PATCH
    return 'Updated';
  }
  return 'Wrong ID';
};

const deletePerson = (args) => {
  const { id } = args;
  const index = persons.findIndex((p) => p.id === id);
  if (index !== -1) {
    persons.splice(index, 1);
    return 'Deleted';
  }
  return 'Wrong ID';
};

module.exports = {
  getAllPersons,
  getPersonsOlderThan,
  getPersonById,
  addPerson,
  updatePerson,
  deletePerson,
};
