const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const Port = process.env.PORT
app.use(express.json());

const Routes =  require("./Routes")
const registerNewService = require('./Controllers/RegisterNewServiceController')

app.listen(Port, () => {
    console.log(`App is Listning on Port ${Port} `)
})

app.use((err, req, res, next) => {
    res.status(500).json({
        error: err.message,
        stack: err.stack,
    })
})


app.use("/api",Routes)

app.get("/registerNewService",registerNewService)