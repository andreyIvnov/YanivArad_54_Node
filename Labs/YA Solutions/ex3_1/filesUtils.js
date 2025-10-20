const jf = require('jsonfile');

const FILE = 'data/persons.json';

const getPersonsByStreet = async (street) => {
  const persons = await jf.readFile(FILE);

  const names = persons
    .filter((per) => per.address.street.name === street)
    .map((per) => per.name);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(names);
    }, 2000);
  });
};

module.exports = { getPersonsByStreet };
