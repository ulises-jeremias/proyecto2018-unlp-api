const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const config = require('./config/server')

const isProduction = config.nodeEnv === 'production'
const isTest = config.nodeEnv === 'testing'

const app = express()

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }))
app.set('view engine', '.hbs')

mongoose.Promise = global.Promise

mongoose.connect(isTest ? config.testMongoURL : config.mongoURL, err => {
  if (err) {
    console.error('Please make sure Mongodb is installed and running!')
    throw err
  }
  
  console.log(`Connected to DB at ${isTest ? config.testMongoURL : config.mongoURL}`)
})

if (!isProduction) {
  mongoose.set('debug', true)
}

// Normal express config defaults
// Apply body Parser and server public assets and routes
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use(bodyParser.json({ limit: '20mb' }))
app.use(express.static(path.resolve(__dirname, '../../', 'public/')))
app.use(require('./routes'))

app.get('/', (req, res) => {
  res.render('home')
})

if (!isTest) {
  app.listen(config.port, err => {
    if (!err) {
      console.log(`Listening on port ${config.port}`)
    }
  })
}

module.exports = app
