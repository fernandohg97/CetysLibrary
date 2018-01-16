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
    registrationNumber: Number,
    name: String,
    division: {
      type: String,
      enum: ['PREP', 'PROF', 'POST', 'DOCT']
    },
    career: {type: String, uppercase: true}
  },
  employee: {
    _id: {type: Schema.Types.ObjectId, ref: 'Employee'},
    employeeNumber: Number,
    name: {type: String, uppercase: true},
    department: Number,
    active: {type: Boolean, default: true}
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
