'use strict'

const express = require('express')
const Reservation = require('../models/reservation/reservation.model')
const app = require('../app.config')

function getReservations(req, res) {
  let findReservations = Reservation.find().sort({reservationDate: -1})
  findReservations.then(reservations => {
    res.json(reservations)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
  })
}

function getReservationsCount(req, res) {
  let findReservations = Reservation.find().count()
  findReservations.then(reservations => {
    res.json(reservations)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
  })
}

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

function createReservation(req, res) {
  let reservation = new Reservation(req.body)
  // console.log(reservation.departureTime);
  if (reservation.departureTime !== null && reservation.departureTime <= reservation.entryTime) {
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

function removeReservation(req, res) {
  let removeReservation = Reservation.findByIdAndRemove(req.params.reservation_id)

  removeReservation.then(reservation => {
    res.json({message: 'Reservation successfully deleted'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar la reservacion: ${err}`})
  })
}

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
