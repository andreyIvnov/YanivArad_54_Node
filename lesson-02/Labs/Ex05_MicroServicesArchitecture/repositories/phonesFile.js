const jf = require('jsonfile');

const getPhonesByUsername = async (username) => {
    const phonesList = await jf.readFile('./Labs/Ex05_MicroServicesArchitecture/data/phones_list.json');
    const userPhones = phonesList.find(user => user.username === username);
    return userPhones ? userPhones.phones : [];
}

module.exports = { getPhonesByUsername }