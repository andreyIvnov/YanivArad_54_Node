const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/personsDB')
    .then(() => console.log('Connected to personsDB'))
    .catch(console.log);
};

module.exports = connectDB;
