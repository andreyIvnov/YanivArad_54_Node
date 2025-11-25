const jsonfile = require('jsonfile');
const FILE_PATH = "data/usersPhones.json"

const getPhones = () => jsonfile.readFile(FILE_PATH);

const getPhoneByUserId = async (userId) => {
    const {persons} = await getPhones();
    return persons.find(ph => ph.id === userId)?.phone;
}

module.exports = {
    getPhones,
    getPhoneByUserId
}