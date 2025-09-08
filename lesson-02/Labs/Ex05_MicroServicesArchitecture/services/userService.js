const usersWS = require('../repositories/usersWS')
const todosWS = require('../repositories/todosWS')
const phonesFile = require('../repositories/phonesFile')

const getUserInfoByUsername = async (username) => {
    const {data: user} = await usersWS.getUserByUserName(username)
    const  {data: todos} = await todosWS.getUsersTodosByUserId(user[0].id, 10)
    const phones = await phonesFile.getPhonesByUsername(username)

    return{
        name:user[0].name,
        email:user[0].email,
        tasks: todos.map(t => t.title),
        phones: phones
    }
}

module.exports = { getUserInfoByUsername }