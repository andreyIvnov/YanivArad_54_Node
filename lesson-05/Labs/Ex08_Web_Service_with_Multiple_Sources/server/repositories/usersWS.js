const axios = require("axios");

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const getUsers = () => axios.get(USERS_ENDPOINT);

module.exports = {
    getUsers,
}