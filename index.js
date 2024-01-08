const express = require("express");

const app = express()

app.use(express.json());



app.use("/1",require("./movies"));
app.use("/2",require("./movies1"));



app.listen(3000)
console.log(`Server on port ${3000}`);

