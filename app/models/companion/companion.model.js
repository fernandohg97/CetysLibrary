'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companionSchema = new Schema({
  reservationDate: {type: Date, required: true},
  quantity: {type: Number, required: true},
  registrationNumber: Number,
  userCode: String,
  division: {type: String, uppercase: true},
  career: {type: String, uppercase: true},
  department: {type: String, uppercase: true},
  reservation: {type: Schema.Types.ObjectId, ref: 'Reservation'}
})

module.exports = mongoose.model('Companion', companionSchema)
