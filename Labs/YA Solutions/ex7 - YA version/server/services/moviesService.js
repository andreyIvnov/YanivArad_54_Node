const moviesRepo = require('../repositories/moviesRepo');

// Get All - Read
const getAllMovies = (filters) => {
  return moviesRepo.getAllMovies(filters);
};

// Get By ID - Read
const getMovieById = (id) => {
  return moviesRepo.getMovieById(id);
};

// Add - Create
const addMovie = (newPer) => {
  return moviesRepo.addMovie(newPer);
};

// Update
const updateMovie = (id, data) => {
  return moviesRepo.updateMovie(id, data);
};

// Delete
const deleteMovie = (id) => {
  return moviesRepo.deleteMovie(id);
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
