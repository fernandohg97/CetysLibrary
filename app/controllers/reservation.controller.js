'use strict'

const express = require('express') // import express library
const Reservation = require('../models/reservation/reservation.model') // import reservation model

// Get all reservations from database
function getReservations(req, res) {
  let findReservations = Reservation.find().sort({reservationDate: -1})
  findReservations.then(reservations => {
    res.json(reservations)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
  })
}

// Get the maximun number of documents in database
function getReservationsCount(req, res) {
  let countReservations = Reservation.find().count()
  countReservations.then(reservations => {
    res.json(reservations)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
  })
}
// Get reservation by id
function getReservation(req, res) {
  let findReservation = Reservation.findById(req.params.reservation_id)

  findReservation.then(reservation => {
    if (reservation) {
      res.json(reservation)
    } else {
      res.status(404).send({message: `Page not found`})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Get reservations by cubicle number
function getReservationsByCubicle(req, res) {
  let findReservationsByCubicles = Reservation.find({cubicle: {$eq: req.params.cubicle}, enable: true}).sort({reservationDate: -1})

  findReservationsByCubicles.then(reservations => {
    if (reservations) {
      res.status(200).json(reservations)
    } else {
      res.status(404).send({message: 'Page not Found'})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Create new reservation
function createReservation(req, res) {
  let reservation = new Reservation(req.body) // get the request form data
  if (reservation.departureTime !== null && reservation.departureTime <= reservation.entryTime) { // In case the departure time it is less than entry time
    return res.status(500).send({departureTimeMsg: 'La hora de salida ya paso'})
  } else {
    let createReservation = reservation.save()
    createReservation.then(reservation => {
      res.status(200).json({
        reservation: reservation,
        message: 'Reservation successfully created'
      })
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
}
// Update specific reservation from database
function updateReservation(req, res) {
  let updateReservation = Reservation.findByIdAndUpdate(req.params.reservation_id, req.body)

  updateReservation.then(reservation => {
    res.json({
      reservationUpdated: reservation,
      message: 'Reservation successfully updated'
    })
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar la reservacion: ${err}`})
  })
}
// Delete specific reservation from database
function removeReservation(req, res) {
  let removeReservation = Reservation.findByIdAndRemove(req.params.reservation_id)

  removeReservation.then(reservation => {
    res.json({message: 'Reservation successfully deleted'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar la reservacion: ${err}`})
  })
}
// Delete all reservations from database
function removeReservations(req, res) {
  let removeReservations = Reservation.remove({})

  removeReservations.then(response => {
    res.json({message: `Reservations successfully deleted ${response}`})
  }).catch(err => res.status(500).send({message: `No se pudo eliminar las reservaciones: ${err}`}))
}

module.exports = {
  getReservations,
  getReservationsCount,
  getReservation,
  getReservationsByCubicle,
  createReservation,
  updateReservation,
  removeReservation,
  removeReservations
}
