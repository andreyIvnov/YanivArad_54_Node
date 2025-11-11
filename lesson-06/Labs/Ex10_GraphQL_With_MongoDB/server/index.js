const express = require('express');
const cors = require('cors');
const connectToDB = require('./configs/dbConnecter');
const PORT = 6666;

const app = express();

app.use(cors());

app.use(express.json())

app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);
    connectToDB();
})