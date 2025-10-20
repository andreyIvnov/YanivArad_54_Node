const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/usersDB')
    .then(() => console.log('Connected to usersDB'))
    .catch(console.log);
};

module.exports = connectDB;
