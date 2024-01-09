const express = require("express");
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json());



app.use("/2",require("./movies"));
app.use("/1",require("./movies1"));



app.listen(3000)
console.log(`Server on port ${3000}`);






