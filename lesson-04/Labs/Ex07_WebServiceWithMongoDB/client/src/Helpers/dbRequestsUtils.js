import axios from 'axios'

const MOOVIES_ENDPOINT = "http://localhost:3000/movies";

const getAllMoovies = async () => axios.get(MOOVIES_ENDPOINT);

const getMovieById = async (id) => axios.get(`${MOOVIES_ENDPOINT}/${id}`)

const addNewMovie = async(obj) => axios.post(MOOVIES_ENDPOINT, obj);

const updateMovie = async(id, obj) => axios.put(`${MOOVIES_ENDPOINT}/${id}`, obj);

const removeMovie = async (id) => axios.delete(`${MOOVIES_ENDPOINT}/${id}`)

export {
    getAllMoovies,
    getMovieById,
    addNewMovie,
    updateMovie,
    removeMovie
}