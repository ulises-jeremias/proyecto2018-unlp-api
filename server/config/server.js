module.exports = {
  url: process.env.URL || 'http://localhost:8000',
  port: process.env.PORT || 8000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/proyecto2018',
}