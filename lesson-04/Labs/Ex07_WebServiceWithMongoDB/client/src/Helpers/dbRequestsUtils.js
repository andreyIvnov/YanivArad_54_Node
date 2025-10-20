import axios from 'axios'

const MOOVIES_ENDPOINT = "http://localhost:3000/moovies";

const getAllMoovies = async () => axios.get(MOOVIES_ENDPOINT);

export {
    getAllMoovies,
}