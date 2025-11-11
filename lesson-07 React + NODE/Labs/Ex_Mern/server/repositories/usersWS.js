const axios = require('axios');
const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = () => axios.get(USERS_ENDPOINT);

module.exports = {
    getAllUsers
}