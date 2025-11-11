import axios from 'axios';

const USERS_ENDPOINT = 'http://localhost:3000/users';

const getAllUsers = () => axios.get(USERS_ENDPOINT);

export {
    getAllUsers
}