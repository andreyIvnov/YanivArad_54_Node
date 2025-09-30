const express = require('express');
const cors = require('cors');

const personsRouter = require('./routers/personsRouter');

const app = express();

/* Middleware */

// Cross-Origin Resource Sharing (CORS) is a mechanism that gives permission for one origin (domain) to access another origin
app.use(cors());

// Parse incoming request bodies in a middleware before the handlers, available under the 'req.body' property
app.use(express.json());

app.use('/persons', personsRouter);

app.listen(3000);
// Base URL: http://localhost:3000
