const express = require('express');
const cors = require('cors');

const carsRouter = require('./Labs/Ex06_RESTService/server/routers/carsRouter');

const app = express();

/* Middleware */

app.use(cors());
app.use(express.json());

app.use('/cars', carsRouter);

app.listen(3000);