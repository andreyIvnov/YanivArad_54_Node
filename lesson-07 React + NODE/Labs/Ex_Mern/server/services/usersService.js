const userRepo = require('../repositories/usersWS');

const getAllUsers = () => userRepo.getAllUsers();

module.exports = {
    getAllUsers,
}