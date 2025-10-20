const axios = require('axios');

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getUserTodos = (id, limit = 10) => {
  return axios.get(`${TODOS_URL}?userId=${id}&_limit=${limit}`);
};

module.exports = { getUserTodos };
