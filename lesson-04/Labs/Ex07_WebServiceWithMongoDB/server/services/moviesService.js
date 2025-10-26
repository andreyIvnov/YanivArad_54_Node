const movieRepo = require('../repositories/moviesRepo');

const getAllMovies = (filters) => {
    return movieRepo.getAllMovies(filters);
}

const getMovieById = (id) => {
    return movieRepo.getMovieById(id);
}

const addMovie = (newMovie) => {
    return movieRepo.addMovie(newMovie);
}

const updateMovie = (id, data) => {
    return movieRepo.updateMovie(id, data);
}

const deleteMovie = (id) => {
    return movieRepo.deleteMovie(id);
}

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
}