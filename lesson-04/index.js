const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors()); //access to all domains

app.use(express.json()) //pars the data to object format



app.listen(3000)