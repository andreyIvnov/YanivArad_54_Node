const { fillTheJsonFile } = require('./HW/HW03_AccessRestAPI/HW03_Utils');
const { getProductsInfo } = require('./HW/HW04_MicroServicesArchitecture/service/orderService');
const {getUserFullName} = require('./Labs/Ex04_RestApi/usersHelper');
const {getUserInfoByUsername} = require('./Labs/Ex05_MicroServicesArchitecture/services/userService');

// getUserFullName("Antonette").then(console.log);
getUserInfoByUsername("Bret").then(console.log);

// getProductsInfo().then(console.log);