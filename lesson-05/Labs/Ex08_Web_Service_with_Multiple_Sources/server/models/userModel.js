const mongoose = require('mongoose');

const schema = mongoose.Schema({
    externalId: Number,
    city: String,
    country: String
},
{
    versionKey: false
})

const User = mongoose.model('user', schema, 'users');
module.exports = User;