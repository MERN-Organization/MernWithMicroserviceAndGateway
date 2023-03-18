const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const Port = process.env.PORT
app.use(express.json());

const Routes =  require("./Routes")

app.listen(Port, () => {
    console.log(`App is Listning on Port ${Port} `)
})

app.use("/api",Routes)