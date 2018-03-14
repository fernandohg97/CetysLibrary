'use strict'

const mongoose = require('mongoose') // import mongoose library
const Schema = mongoose.Schema // Declare schema with mongoose

// Create usersDetail schema
var usersDetailSchema = new Schema({
  quantity: {type: Number, required: true},
  registrationNumber: Number,
  userCode: String,
  division: String,
  career: String,
  department: String
})
// Create reservation schema
var reservationSchema = new Schema({
  user: {
    _id: {type: Schema.Types.ObjectId, ref: 'User'},
    registrationNumber: Number,
    name: String,
    division: {
      type: String,
      enum: ['PREP', 'PROF', 'POST', 'DOCT', 'TECN']
    },
    career: {type: String, uppercase: true}
  },
  employee: {
    _id: {type: Schema.Types.ObjectId, ref: 'Employee'},
    employeeNumber: Number,
    name: {type: String, uppercase: true},
    department: Number,
    active: Boolean
  },
  externalUser: {
    _id: {type: Schema.Types.ObjectId, ref: 'ExternalUser'},
    userCode: {type: String, uppercase: true},
    name: {type: String, uppercase: true},
    description: String
  },
  cubicle: {type: Number, required: true},
  reservationDate: {type: Date, required: [true, 'La fecha de reservacion es requerida']},
  entryTime: {type: Date, default: Date.now, required: [true, 'La hora de entrada es requerida']},
  departureTime: {type: Date, required: [true, 'La hora de salida es requerida']},
  peopleQuantity: {type: Number, min: 0},
  usersDetails: {type: [usersDetailSchema]},
  borrowedMaterial: String,
  enable: {type: Boolean, default: true, required: true},
  createdAt: {type: Date, required: true, default: new Date()}
})

module.exports = mongoose.model('Reservation', reservationSchema)
