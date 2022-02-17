const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const config = require( "./config" )
const indexRouter = require("./app/index")
const app = express()

const ENV = process.env.NODE_ENV || config.env;

app.set( "env", ENV );
require( "./config/mongoose" )( app );

app.use(cors({ origin: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(indexRouter)

module.exports = app