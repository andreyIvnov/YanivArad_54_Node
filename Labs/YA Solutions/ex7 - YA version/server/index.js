const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

const moviesRouter = require('./routers/moviesRouter');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use('/movies', moviesRouter);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
  connectDB();
});
