'use strict'

const mongoose = require('mongoose') // import mongoose library
const Schema = mongoose.Schema // Declare schema with mongoose
// Create employee schema
const employeeSchema = new Schema({
  employeeNumber: {
    type: Number,
    unique: true,
    required: [true, 'El codigo del empleado es requerido']
  },
  name: {type: String, required: [true, 'El nombre del empleado es requerido'], uppercase: true},
  department: {type: Number, required: [true, 'El numero del departmento es requerido']},
  active: {type: Boolean, required: [true, 'Este campo es requerido'], default: true}
})

module.exports = mongoose.model('Employee', employeeSchema)
