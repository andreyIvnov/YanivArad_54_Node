const axios = require('axios');

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getUserById = (id) => {
  return axios.get(`${USERS_URL}/${id}`);
};

module.exports = { getUserById };
