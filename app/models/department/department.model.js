'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departmentSchema = new Schema({
  departmentCode: {
    type: Number,
    unique: true,
    required: [true, 'El codigo del departamento es requerido']
  },
  departmentName: {type: String, required: [true, 'El nombre del departamento es requerido'], uppercase: true},
})

module.exports = mongoose.model('Department', departmentSchema)
