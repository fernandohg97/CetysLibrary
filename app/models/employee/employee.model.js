'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
