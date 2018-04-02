'use strict'

const mongoose = require('mongoose') // import mongoose library
const Schema = mongoose.Schema // Declare schema with mongoose
// Create external user schema
const externalUserSchema = new Schema({
  userCode: {
    type: String,
    uppercase: true,
    required: [true, 'El codigo del usuario es requerido']
  },
  name: {type: String, required: [true, 'El nombre del empleado es requerido'], uppercase: true},
  description: String
})

module.exports = mongoose.model('ExternalUser', externalUserSchema)
