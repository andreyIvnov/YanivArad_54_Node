const filesUtils = require('./filesUtils');

const STREET = 'Herzl';

filesUtils.getPersonsByStreet(STREET).then(console.log).catch(console.log);
