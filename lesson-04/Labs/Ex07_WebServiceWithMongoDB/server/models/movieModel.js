const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, require: true },
    director: String,
    primieredYear: Number
},
{
    versionKey: false,
})

const Movie = mongoose.model('movie', schema, 'movies');

module.exports = Movie;