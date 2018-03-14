'use strict'

const mongoose = require('mongoose') // import mongoose library
const Schema = mongoose.Schema // Declare schema with mongoose
// Create department schema
const departmentSchema = new Schema({
  departmentCode: {
    type: Number,
    unique: true,
    required: [true, 'El codigo del departamento es requerido']
  },
  departmentName: {type: String, required: [true, 'El nombre del departamento es requerido'], uppercase: true},
})

module.exports = mongoose.model('Department', departmentSchema)
