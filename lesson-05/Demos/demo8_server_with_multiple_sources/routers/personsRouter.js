const express = require('express');
const personsService = require('../services/personsService');

const router = express.Router();

// Entry Point: http://localhost:3000/persons

router.get('/', async (req, res) => {
  try {
    const queries = req.query;
    const persons = await personsService.getAllPersons(queries);
    res.send(persons);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/cities', async (req, res) => {
  try {
    const cities = await personsService.getAllCities();
    res.send(cities);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = await personsService.getPersonById(id);
    res.send(person);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const perObj = req.body;
    const newPer = await personsService.addPerson(perObj);
    res.status(201).send(`The new ID: ${newPer._id}`);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await personsService.updatePerson(id, data);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await personsService.deletePerson(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
