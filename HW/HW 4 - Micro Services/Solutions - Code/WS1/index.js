const express = require("express");

const app = express();


const productsRouter = require("./Routers/productsRouter")
app.use("/products",productsRouter)

app.listen(8001, () => {
    console.log("Server listening on port 8001")
})