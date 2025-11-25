const User = require('../models/userModel')

const getUsersAddresses = (filters) => User.find(filters);

module.exports = {
    getUsersAddresses
}