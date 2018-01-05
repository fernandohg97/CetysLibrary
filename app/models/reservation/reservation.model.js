'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const valid = require('./reservation.validation')

var usersDetailSchema = new Schema({
  quantity: {type: Number, required: true},
  registrationNumber: {type: Number, required: true},
  division: {type: String},
  career: {type: String},
  department: {type: String}
})

var reservationSchema = new Schema({
  user: {
    _id: {type: Schema.Types.ObjectId, ref: 'User'},
    registrationNumber: {type: Number, required: [true, 'La matricula es requerida']},
    name: {type: String, required: [true, 'El nombre es requerido']},
    division: {
      type: String,
      enum: ['PREP', 'PROF', 'POST', 'DOCT'],
      required: [true, 'La division es requerida']
    },
    career: {type: String, uppercase: true, required: [true, 'La carrera es requerida']}
  },
  cubicle: {type: Number, required: true},
  reservationDate: {type: Date, required: [true, 'La fecha de reservacion es requerida'], validate: valid.reservationDateValidation},
  entryTime: {type: Date, default: Date.now, required: [true, 'La hora de entrada es requerida']},
  departureTime: {type: Date, required: [true, 'La hora de salida es requerida']},
  peopleQuantity: {type: Number, min: 0},
  usersDetails: {type: [usersDetailSchema]},
  borrowedMaterial: String,
  enable: {type: Boolean, default: true, required: true},
  createdAt: {type: Date, required: true, default: Date.now}
})

module.exports = mongoose.model('Reservation', reservationSchema)
