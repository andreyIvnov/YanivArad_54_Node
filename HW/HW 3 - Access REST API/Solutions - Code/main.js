const utils = require("./utils")

utils.getMovies().then(data => console.log(data))

// async function aux_func() {
//     const status = await utils.getMovies()
//     console.log(status)
// }

// aux_func()