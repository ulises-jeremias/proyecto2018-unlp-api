const mongoose = require('mongoose')

const { Schema } = mongoose

const stateSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'El campo `nombre` es requerido',
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('State', stateSchema)
