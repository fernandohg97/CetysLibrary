'use strict'

const express = require('express')
const reservationRouter = express.Router()
const app = express()
const reservationCtrl = require('../controllers/reservation.controller')

reservationRouter.get('/reservations', reservationCtrl.getReservations)

reservationRouter.get('/reservations/count', reservationCtrl.getReservationsCount)

reservationRouter.get('/reservations/:reservation_id', reservationCtrl.getReservation)

reservationRouter.get('/reservations/cubicle/:cubicle', reservationCtrl.getReservationsByCubicle)

reservationRouter.post('/reservations', reservationCtrl.createReservation)

reservationRouter.put('/reservations/:reservation_id', reservationCtrl.updateReservation)

reservationRouter.delete('/reservations/:reservation_id', reservationCtrl.removeReservation)

reservationRouter.delete('/reservations', reservationCtrl.removeReservations)

module.exports = reservationRouter
