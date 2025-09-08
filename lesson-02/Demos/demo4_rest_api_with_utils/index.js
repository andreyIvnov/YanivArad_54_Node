// const utils = require('./utils'); // Option 1
const { getAll, getAllEmails } = require('./utils'); // Option 2

getAll().then((resp) => console.log(resp.data)); // Option 1
getAll().then(({ data }) => console.log(data)); // Option 2

getAllEmails().then(console.log).catch(console.log);
