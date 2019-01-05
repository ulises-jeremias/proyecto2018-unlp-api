const mongoose = require('mongoose')

const { Schema } = mongoose

const querySchema = new Schema({
  firtsName: {
    type: String,
    trim: true,
    required: 'El campo `nombre` es requerido',
  },
  lastName: {
    type: String,
    trim: true,
    required: 'El campo `apellido` es requerido',
  },
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
