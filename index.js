import express from 'express'

const app = express()

app.use("/",require("./movies"));


app.listen(3000)
console.log(`Server on port ${3000}`);

