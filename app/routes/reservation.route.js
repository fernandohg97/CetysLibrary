'use strict'

const express = require('express') // import express library
const reservationRouter = express.Router() //delcare router with express
const reservationCtrl = require('../controllers/reservation.controller') // import reservations controller
// Endpoints
reservationRouter.get('/reservations', reservationCtrl.getReservations) // Get all reservations

reservationRouter.get('/reservations/count', reservationCtrl.getReservationsCount) // Get the maximun number of reservations

reservationRouter.get('/reservations/file', reservationCtrl.createReservationFile) // Create users local file

reservationRouter.get('/reservations/download', reservationCtrl.downloadReservationFile) // Download users local file

reservationRouter.get('/reservations/remove', reservationCtrl.removeReservationFile) // Remove users local file

reservationRouter.get('/reservations/:reservation_id', reservationCtrl.getReservation) // Get reservation by id

reservationRouter.get('/reservations/cubicle/:cubicle', reservationCtrl.getReservationsByCubicle) // Get reservations by cubicle

reservationRouter.post('/reservations', reservationCtrl.createReservation) // Create reservation

reservationRouter.put('/reservations/:reservation_id', reservationCtrl.updateReservation) // Update reservation

reservationRouter.delete('/reservations/:reservation_id', reservationCtrl.removeReservation) // Delete reservation by id

reservationRouter.delete('/reservations', reservationCtrl.removeReservations) // Delete all reservations

module.exports = reservationRouter
