const express = require('express');
const cors = require('cors');

const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const persSrv = require('./services/personsService');

const schema = buildSchema(`
  input PersonInput {
    id: Int
    name: String
    age: Int
  }

  type Person {
    id: Int
    name: String
    age: Int
  }

  type Query {
    allPersons: [Person]
    getPersonsOlderThan(age: Int): [Person]
    getPerson(id: Int): Person
  }

  type Mutation {
    createPerson(per: PersonInput): String
    updatePerson(per: PersonInput): String
    deletePerson(id: Int): String
  }
`);

// The 'root' provides a resolver function for each API endpoint
const root = {
  allPersons: persSrv.getAllPersons,
  getPersonsOlderThan: persSrv.getPersonsOlderThan,
  getPerson: persSrv.getPersonById,
  createPerson: persSrv.addPerson,
  updatePerson: persSrv.updatePerson,
  deletePerson: persSrv.deletePerson,
};

const app = express();
const PORT = 4000;

app.use(cors());

app.use(
  '/persons',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
