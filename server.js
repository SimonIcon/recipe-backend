const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const homeRoute = require('./routes/homeRoute')

// initializing application
const app = express()
dotenv.config()

// application middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

// route middlewares
app.use('/', homeRoute)

// creating a server
app.listen(process.env.PORT, () => {
    console.log(`server running at port ${process.env.PORT}`)
})





