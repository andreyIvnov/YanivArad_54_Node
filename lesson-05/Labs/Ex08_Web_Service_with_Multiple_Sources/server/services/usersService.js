const usersWS = require("../repositories/usersWS");
const addressesDB = require("../repositories/addressesDB");
const phonesFile = require("../repositories/phonesFile");

const getAll = async () => {
    try {
        const [
            {data: users}, 
            addrresses, 
            {persons: phones}] = await Promise.all([
            usersWS.getUsers(),
            addressesDB.getUsersAddresses(),
            phonesFile.getPhones()
        ])

        return users.map(user => {
            const userAddress = addrresses.find(address => address.externalId === user.id)
            const userPhone = phones.find(phone => phone.id === user.id)
            return { 
                id: user?.id, 
                name: user?.name, 
                email: user?.email, 
                phone: userPhone?.phone,
                address: 
                userAddress ? 
                { 
                    city: userAddress?.city, 
                    Country: userAddress?.country
                } : null
            }
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getAll,
}