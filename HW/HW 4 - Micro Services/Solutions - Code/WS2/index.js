const  express = require('express');
const app = express();
const port = 8000;

const productsRouter = require("./Routers/productsRouter")
app.use("/products", productsRouter)


app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});