const jf = require('jsonfile');

const File = 'data/cars.json';

const getCars = () => {
  return jf.readFile(File);
};

const setCars = (cars) => {
  return jf.writeFile(File, cars);
};

module.exports = {
  getCars,
  setCars,
};
