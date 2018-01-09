'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const externalUserSchema = new Schema({
  userNumber: {
    type: Number,
    unique: true,
    required: [true, 'El codigo del usuario es requerido']
  },
  name: {type: String, required: [true, 'El nombre del empleado es requerido'], uppercase: true},
  description: String
})

module.exports = mongoose.model('ExternalUser', externalUserSchema)
