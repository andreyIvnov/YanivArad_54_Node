const jf = require('jsonfile');
const axios = require('axios');

const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const TODOS_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

const TODOS_FILE_PATH = './Labs/Ex04_RestApi/todos.json';

async function getUserFullName(username) {
    const { data } = await axios.get(`${USERS_ENDPOINT}?username=${username}`);

    if (data[0].name.toLowerCase().startsWith('e')) {
        const todos = await getUsersTodos(data[0].id);
        jf.writeFileSync(TODOS_FILE_PATH, todos, { spaces: 2 });
    }

    return data[0].name;
}

async function getUsersTodos(userId) {
    const { data } = await axios.get(`${TODOS_ENDPOINT}?userId=${userId}`);
    return data.map(t => t.title);
}

module.exports = { getUserFullName };