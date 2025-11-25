const mongoose = require("mongoose");

const connec2DB = () => {
    mongoose
        .connect('mongodb://localhost:27017/usersDB')
        .then(() => console.log('Connected to usersDB'))
        .catch(console.log)
}

module.exports = connec2DB;