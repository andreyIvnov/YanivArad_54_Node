const axios = require('axios');

const TODOS_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

const getUsersTodosByUserId = (userId, limitOfTodos) => axios.get(`${TODOS_ENDPOINT}?userId=${userId}&_limit=${limitOfTodos}`)

module.exports = { getUsersTodosByUserId }
