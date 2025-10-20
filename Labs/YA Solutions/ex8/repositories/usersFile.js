const jf = require('jsonfile');

const File = 'data/persons.json';

const getAllUsers = () => jf.readFile(File);

module.exports = { getAllUsers };
