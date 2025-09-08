const axios = require('axios');
const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const getUserByUserName = (username) => axios.get(`${USERS_ENDPOINT}?username=${username}`)

module.exports = { getUserByUserName }