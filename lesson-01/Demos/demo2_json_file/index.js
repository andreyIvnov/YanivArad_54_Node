const utils = require('./utils');

// /* Read */
// utils
//   .getPersons()
//   .then(console.log)
//   .catch((error) => console.log('Error:', error.path));

/* Write */
const newPer = { name: 'Eyal', age: 20 };
utils.setPerson(newPer).then(console.log).catch(console.log);
