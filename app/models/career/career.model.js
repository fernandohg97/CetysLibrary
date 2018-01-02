'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const careerSchema = new Schema({
  careerCode: {type: String, required: [true, 'La clave de la carrera es requerido'], unique: true, uppercase: true},
  careerName: {type: String, required: [true, 'El nombre de la carrera es requerido'], uppercase: true},
  division: {type: String, required: [true, 'La division es requerido'], uppercase: true},
  area: {type: String, required: [true, 'El area es requerido'], uppercase: true},
  active: {type: Boolean, required: [true, 'El campo activo es requerido'], default: true}
})

module.exports = mongoose.model('Career', careerSchema)
