const mongoose = require('mongoose');

const connectToDB = () => {
    console.log('START connect to MongoDB');

    mongoose
        .connect("mongodb://localhost:27017/productsDB")
        .then(() => console.log("Connected to DB"))
        .catch(console.log);
}

module.exports = connectToDB