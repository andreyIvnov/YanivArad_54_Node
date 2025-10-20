const usersWS = require('../repositories/usersWS');
const todosWS = require('../repositories/todosWS');
const phonesFile = require('../repositories/phonesFile');

const getUserData = async (username) => {
  const { data: users } = await usersWS.getUserByUsername(username);
  const user = users[0];

  const { data: todos } = await todosWS.getUserTodos(user.id);
  const titles = todos.map((todo) => todo.title);

  const data = await phonesFile.getUsers();
  const { phones } = data.users.find((user) => user.username === username);

  return {
    name: user.name,
    email: user.email,
    titles,
    phones,
  };
};

module.exports = {
  getUserData,
};
