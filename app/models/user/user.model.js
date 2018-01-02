'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  registrationNumber: {
    type: Number,
    unique: true,
    required: [true, 'La matricula es requerida']
  },
  name: {type: String, required: [true, 'El nombre es requerido']},
  division: {
    type: String,
    enum: ['PREP', 'PROF', 'POST', 'DOCT'],
    required: [true, 'La division es requerida']
  },
  career: {type: String, required: [true, 'La carrera es requerida'], uppercase: true}
})

module.exports = mongoose.model('User', userSchema)
