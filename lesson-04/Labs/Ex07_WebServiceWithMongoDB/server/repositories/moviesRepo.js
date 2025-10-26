const Movie = require('../models/movieModel');

const getAllMovies = (filters) => {
    return Movie.find(filters);
}

const getMovieById = (id) => {
    return Movie.findById(id);
}

const addMovie = (obj) => {
    return Movie.create(obj);
}

const updateMovie = (id, obj) => {
    return Movie.findByIdAndUpdate(id, obj);
}

const deleteMovie = (id) => {
    return Movie.findByIdAndDelete(id);
}


module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
}