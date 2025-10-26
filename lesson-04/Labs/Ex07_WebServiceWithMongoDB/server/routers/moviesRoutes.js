const express = require('express');
const moviesService = require('../services/moviesService');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const queries = req.query;
        const movies = await moviesService.getAllMovies(queries);
        res.send(movies);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await moviesService.getMovieById(id);
        res.send(movie);
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const movieObj = req.body;
        const newMovie = await moviesService.addMovie(movieObj);
        res.status(201).send(newMovie);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const movieToUpd = req.body;
        const result = await moviesService.updateMovie(id, movieToUpd);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await moviesService.deleteMovie(id);
        res.send(result);
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;