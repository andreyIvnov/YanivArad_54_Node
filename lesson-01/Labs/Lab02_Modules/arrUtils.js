const { getLength } = require('./strUtils');

const getArrLength = (arr) => arr.reduce((acc, str) => acc + getLength(str), 0)

module.exports = { getArrLength };