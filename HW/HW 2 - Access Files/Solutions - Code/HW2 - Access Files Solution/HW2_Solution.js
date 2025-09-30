const jFile = require("jsonfile")


async function getUserById(id) {
    try {
        const phonesFileData = await jFile.readFile("./phones.json")
        const usersFileData = await jFile.readFile("./users.json")

        const users = usersFileData.users
        const phones = phonesFileData.phones

        const finalUser = users.find(user => user.id === id)

        const phonesUser = phones.find(u => u.userId === id)
        finalUser.phones = [...phonesUser.phones]
        return finalUser

    } catch (err) {
        throw err
    }

}


module.exports = {getUserById}