const express = require("express");
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json());

app.use("/",require("./movies1"));



app.listen(3000)
console.log(`Server on port ${3000}`);






