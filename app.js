const express = require('express')
const bodyParser = require('body-parser')
const database = require('./db')
const tableRoute = require('./Table/route')
const { json } = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use('/table', tableRoute)

app.get('', async (req, res) => {
  console.log('hello')
})

module.exports = app
