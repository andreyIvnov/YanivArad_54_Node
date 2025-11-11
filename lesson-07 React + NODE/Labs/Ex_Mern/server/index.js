const express = require('express');
const cors = require('cors');

const connectToDb = require('./configs/dbConnecter')
const usersRouter = require('./routers/usersRouter');
const productsRouter = require('./routers/productsRouter');

const PORT = 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(PORT, () => {
    
    console.log(`app is listening at http://localhost:${PORT}`);

    connectToDb();
})