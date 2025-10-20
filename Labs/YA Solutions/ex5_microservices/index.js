const usersService = require('./services/usersService');

const username = 'Antonette';

usersService.getUserData(username).then(console.log).catch(console.log);
