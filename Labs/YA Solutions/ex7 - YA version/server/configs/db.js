const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/moviesDB')
    .then(() => console.log('Connected to moviesDB'))
    .catch(console.log);
};

module.exports = connectDB;
