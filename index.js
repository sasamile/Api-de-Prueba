const express = require("express");

const app = express()

app.use(express.json());



app.use("/",require("./movies"));


app.listen(3000)
console.log(`Server on port ${3000}`);

