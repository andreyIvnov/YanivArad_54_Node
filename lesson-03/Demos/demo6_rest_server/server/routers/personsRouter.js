const express = require('express');
const personsService = require('../services/personsService');

const router = express.Router();

// Entry Point: http://localhost:3000/persons

router.get('/', (req, res) => {
  const persons = personsService.getAllPersons();
  res.send(persons);
  // res.json(persons);
});

router.get('/:id', (req, res) => {
  // // Option 1
  // const id = req.params.id;
  // Option 2
  const { id } = req.params;
  const person = personsService.getPersonById(id);
  res.send(person);
});

router.post('/', (req, res) => {
  const perObj = req.body;
  const result = personsService.addPerson(perObj);
  res.send(result);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = personsService.updatePerson(id, data);
  res.send(result);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const result = personsService.deletePerson(id);
  res.send(result);
});

module.exports = router;
