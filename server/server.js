const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const config = require('./config/server')

const isProduction = config.nodeEnv === 'production'

const app = express()

mongoose.Promise = global.Promise

mongoose.connect(config.mongoURL, err => {
  if (err) {
    console.error('Please make sure Mongodb is installed and running!')
    throw err
  }
  
  console.log(`Connected to DB at ${config.mongoURL}`)
})

if (!isProduction) {
  mongoose.set('debug', true)
}

// Normal express config defaults
// Apply body Parser and server public assets and routes
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use(bodyParser.json({ limit: '20mb' }))

app.use(express.static(path.resolve(__dirname, '../', 'public/')))

app.use(require('./routes'))

app.listen(config.port, () => {
  console.log('Listening on port ' + config.port)
})

module.exports = app
