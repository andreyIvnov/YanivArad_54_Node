const { getLength } = require('./strUtils');

const getArrLength = (arrStr) =>
  arrStr.reduce((acc, s) => acc + getLength(s), 0);

module.exports = { getArrLength };
