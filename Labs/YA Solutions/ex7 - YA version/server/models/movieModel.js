const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    director: String,
    premieredYear: Number,
  },
  {
    versionKey: false,
  }
);

const Movie = mongoose.model('movie', schema);

module.exports = Movie;
