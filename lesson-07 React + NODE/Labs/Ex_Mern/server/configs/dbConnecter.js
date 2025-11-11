const mongoose = require('mongoose');

const connectToDB = () => {
    console.log('START - connect to DB');
    
    mongoose
        .connect("mongodb://localhost:27017/productsDB")
        .then(() => console.log('Connected to DB successfully.'))
        .catch(console.log);
}

module.exports = connectToDB;