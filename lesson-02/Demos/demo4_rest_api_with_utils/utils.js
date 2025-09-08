const axios = require('axios');

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getAll = () => {
  return axios.get(USERS_URL);
};

const getAllEmails = async () => {
  const { data: users } = await getAll();
  const emails = users.map((user) => user.email);
  return emails;
};

module.exports = {
  getAll,
  getAllEmails,
};
