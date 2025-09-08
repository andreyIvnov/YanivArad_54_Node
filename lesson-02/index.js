const {getUserFullName} = require('./Labs/Ex04_RestApi/usersHelper');
const {getUserInfoByUsername} = require('./Labs/Ex05_MicroServicesArchitecture/services/userService');

// getUserFullName("Antonette").then(console.log);
getUserInfoByUsername("Bret").then(console.log);
