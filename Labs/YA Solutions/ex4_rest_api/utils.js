const axios = require('axios');
const jf = require('jsonfile');

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const FILE = 'data/user_titles.json';

const getUserFullName = async (username) => {
  const { data: users } = await axios.get(`${USERS_URL}?username=${username}`);
  const user = users[0];

  // if (user.name[0]) // Option 1
  if (user.name.startsWith('E')) { // Option 2
    const { data: userTodos } = await axios.get(
      `${TODOS_URL}?userId=${user.id}`
    );
    const titles = userTodos.map((todo) => todo.title);
    jf.writeFile(FILE, titles);
  }

  return user.name;
};

module.exports = {
  getUserFullName,
};
