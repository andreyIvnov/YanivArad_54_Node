const axios = require('axios');

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = (filters) => {
  return axios.get(USERS_URL, { params: filters });
};

module.exports = {
  getAllUsers,
};
