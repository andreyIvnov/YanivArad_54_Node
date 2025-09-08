const usersWS = require('../repositories/usersWS');
const usersFile = require('../repositories/usersFile');

const getUserData = async (id) => {
  // Data from WS
  const { data } = await usersWS.getUserById(id);

  // Data from file
  const usersPhones = await usersFile.getUsers();
  const { phone } = usersPhones.find((user) => user.id === id);

  return {
    id,
    name: data.name,
    phone,
  };
};

module.exports = {
  getUserData,
};
