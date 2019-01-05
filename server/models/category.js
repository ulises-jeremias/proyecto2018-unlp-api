const mongoose = require('mongoose')

const { Schema } = mongoose

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'El campo `nombre` es requerido',
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('Category', categorySchema)
