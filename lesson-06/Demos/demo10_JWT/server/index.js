const express = require('express');
const cors = require('cors');

const authRouter = require('./routers/authRouter');
const productsRouter = require('./routers/productsRouter');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use('/auth', authRouter);
app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
