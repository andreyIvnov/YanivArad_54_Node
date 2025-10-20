const usersRepo = require('../repositories/usersRepo');

const getAllUsers = async (filters) => {
  try {
    const { data: users } = await usersRepo.getAllUsers(filters);
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllUsers };
