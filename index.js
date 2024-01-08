const express = require("express");

const app = express()

app.use(express.json());

const movies = require("./sample.json")

app.get('/',(req, res)=>{
    res.json(movies);
})


app.listen(3000)
console.log(`Server on port ${3000}`);

