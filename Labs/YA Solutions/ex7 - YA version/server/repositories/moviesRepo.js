const Movie = require('../models/movieModel');

// Get All
const getAllMovies = (filters) => {
  return Movie.find(filters);
};

// Get By ID
const getMovieById = (id) => {
  return Movie.findById(id);
};

// Create
const addMovie = (obj) => {
  return Movie.create(obj);
};

// Update
const updateMovie = (id, obj) => {
  return Movie.findByIdAndUpdate(id, obj);
};

const deleteMovie = (id) => {
  return Movie.findByIdAndDelete(id);
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
