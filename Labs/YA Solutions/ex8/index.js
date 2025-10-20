const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

const usersRouter = require('./routers/usersRouter');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
  connectDB();
});
