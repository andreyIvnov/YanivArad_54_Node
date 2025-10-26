const express = require('express');
const cors = require("cors");
const connectDB = require("./configs/dbConnecter")
const moviesRouter = require('./routers/moviesRoutes')
const PORT = 3000;

const app = express();

app.use(cors()); //access to all domains

app.use(express.json()) //pars the data to object format

app.use('/movies', moviesRouter)


app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);
    connectDB()
})