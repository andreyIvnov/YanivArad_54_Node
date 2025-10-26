const mongoose = require("mongoose");

const connectDB = () => {
    console.log("Start connect to MongoDB");
    
    mongoose
        .connect("mongodb://localhost:27017/moviesDB")
        .then(() => console.log("Connected to DB"))
        .catch(console.log);
}

module.exports = connectDB;