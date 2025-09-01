const jf = require('jsonfile');

const FILE = './Labs/Lab03_Files/users.json';
const MINIMAL_USERS_FILE = './Labs/Lab03_Files/usersMinimal.json';
const PHONES_FILE = './Labs/Lab03_Files/phones.json';

const getUsersLivedInStreet = (streetName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            jf.readFile(FILE).then((users) => {
                resolve(users.filter((user) => user.address.street.name === streetName).map((user) => user.name));
            }).catch((error) => {
                reject(error);
            });
        }, 2000);
    });
};

const getUserInfoById = async (userId) => {
    const { users } = await jf.readFile(MINIMAL_USERS_FILE);
    const {phones} = await jf.readFile(PHONES_FILE);
    const user = users.filter((user) => user.id === userId);

    if (user.length > 0) {
        const userPhones = phones.filter((phone) => phone.userid === userId);
        return { ...user[0], phones: userPhones[0].phones };
    } else {
        return 'User not found';
    }
};

module.exports = { getUsersLivedInStreet, getUserInfoById };