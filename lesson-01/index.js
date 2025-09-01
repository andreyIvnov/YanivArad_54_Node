// const arrUtils = require('./Labs/Lab02_Modules/arrUtils');

// const result = arrUtils.getArrLength(['Hello', 'World']);

// console.log(result);

const { getUsersLivedInStreet, getUserInfoById } = require('./Labs/Lab03_Files/filesUtils');

getUsersLivedInStreet("Herzel")
    .then(console.log)
    .catch(console.log);

// getUserInfoById(1)
//     .then(console.log)
//     .catch(console.log);
