const axios = require('axios');

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getAll = async () => {
  const resp = await axios.get(USERS_URL);
  // console.log(resp);
  console.log(resp.data);
};

const getById = async (id) => {
  const { data: user } = await axios.get(`${USERS_URL}/${id}`);
  console.log(user);
};

const addUser = async (newUser) => {
  const { data } = await axios.post(USERS_URL, newUser);
  console.log(data);
};

const updateUser = async (obj) => {
  // const { data } = await axios.put(`${USERS_URL}/4`, obj);
  const { data } = await axios.patch(`${USERS_URL}/4`, obj);
  console.log(data);
};

const deleteUser = async (id) => {
  const { data: user } = await axios.delete(`${USERS_URL}/${id}`);
  console.log(user);
};

const filteredItems = async (userId, completed) => {
  const { data } = await axios.get(
    `${TODOS_URL}?userId=${userId}&completed=${completed}`
  );
  console.log(data);
};

// getAll();
// getById(3);
// addUser({ name: 'Avi', age: 30 });
// updateUser({ name: 'Dana', age: 27 });
// deleteUser(7);
filteredItems(4, false);
