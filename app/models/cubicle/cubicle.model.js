'use strict'

const mongoose = require('mongoose') // import mongoose library
const Schema = mongoose.Schema // Declare schema with mongoose
// Create cubicle schema
const cubicleSchema = new Schema({
  cubicleNumber: {
    type: Number,
    unique: true,
    required: [true, 'El numero del cubiculo es requerido'],
    min: [1, 'El numero del cubiculo debe ser mayor a 0']
  },
  availability: {
    type: Boolean,
    default: true,
    required: true
  }
})

module.exports = mongoose.model('Cubicle', cubicleSchema)
