const usersService = require('./services/usersService');

const userId = 4;

usersService.getUserData(userId).then(console.log).catch(console.log);
