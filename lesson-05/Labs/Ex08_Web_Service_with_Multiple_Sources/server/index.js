const express = require('express');
const cors = require('cors');
const connec2DB = require('./configs/usersDB');
const usersRouter = require("./routers/usersRouter")

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use("/users", usersRouter);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
    connec2DB();
})