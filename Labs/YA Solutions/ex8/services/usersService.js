const usersWS = require('../repositories/usersWS');
const usersFile = require('../repositories/usersFile');
const usersDB = require('../repositories/usersDB');

const getAllUsers = async () => {
  try {
    // /* Option 1 */
    // // data from WS
    // const wsRes = await usersWS.getAllUsers();
    // // data from File
    // const fileRes = await usersFile.getAllUsers();
    // // data from DB
    // const dbRes = await usersDB.getAllUsers();

    /* Option 2 */
    const [wsRes, fileRes, dbRes] = await Promise.all([
      usersWS.getAllUsers(),
      usersFile.getAllUsers(),
      usersDB.getAllUsers(),
    ]);

    const usersData = wsRes.data.slice(0, 2).map((user) => {
      const userFile = fileRes.persons.find((per) => per.id === user.id);
      const userDB = dbRes.find((u) => u.externalId === user.id);

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: userFile.phone,
        address: {
          city: userDB.city,
          country: userDB.country,
        },
      };
    });

    return usersData;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllUsers };
