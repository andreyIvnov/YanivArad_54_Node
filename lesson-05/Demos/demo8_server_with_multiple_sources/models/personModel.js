const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: Number,
    city: String,
  },
  {
    versionKey: false,
  }
);

const Person = mongoose.model('person', schema, 'persons');

module.exports = Person;
