const mongoose = require('mongoose')

const { Schema } = mongoose

require('./category')
require('./state')

const querySchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: 'El campo `email` es requerido',
    match: [
      /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
      'Ingrese un email valido - ejemplo@dominio.com',
    ],
  },
  description: {
    type: String,
    trim: true,
    required: 'El campo `descripción` es requerido',
  },
  category: {
    required: 'El campo `categoría` es requerido',
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  state: {
    required: 'El campo `estado` es requerido',
    type: Schema.Types.ObjectId,
    ref: 'State',
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('Query', querySchema)
