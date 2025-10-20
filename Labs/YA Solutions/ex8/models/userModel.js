const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    externalId: { type: Number, required: true },
    city: String,
    country: String,
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model('user', schema);

module.exports = User;
