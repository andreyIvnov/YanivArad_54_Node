const jf = require('jsonfile');

const FILE = 'persons.json';

const getPersons = () => {
  return jf.readFile(FILE);
};

const setPerson = async (per) => {
  const persons = await getPersons();
  persons.push(per);
  await jf.writeFile(FILE, persons);
  return 'A new person was added';
};

module.exports = { getPersons, setPerson };
