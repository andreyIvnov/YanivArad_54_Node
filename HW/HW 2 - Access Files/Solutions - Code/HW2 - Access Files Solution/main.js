const utils = require("./HW2_Solution")


// with .then
utils.getUserById(1).then(data => console.log(data))



// // with async - await 
// async function aux_func() {
//     const result = await utils.getUserById(1)
//     console.log(result)
// }