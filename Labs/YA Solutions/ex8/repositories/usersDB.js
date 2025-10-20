const User = require('../models/userModel');

const getAllUsers = () => User.find();

module.exports = { getAllUsers };
