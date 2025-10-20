const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

const carsRouter = require('./routers/carsRouter');
const usersRouter = require('./routers/usersRouter');
const personsRouter = require('./routers/personsRouter');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use('/cars', carsRouter); // JSON File
app.use('/users', usersRouter); // WS
app.use('/persons', personsRouter); // DB

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
  connectDB();
});
