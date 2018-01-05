'use strict'

const Reservation = require('../models/reservation/reservation.model')

function getReportsByDivision(req, res) {
  let findReservationsDivision = Reservation.aggregate( [
    { $match: { reservationDate: { $gte: new Date(req.query.start), $lte: new Date(req.query.end) } } },
    { $group: { "_id": "$user.division", "ingresos": { $sum: 1 } } }
   ])

  findReservationsDivision.then(data => {
    if (data) {
      res.json(data)
    } else {
      res.status(404).send({message: `Page not found`})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

function getReportsByCubicle(req, res) {
  let findReservationsCubicle = Reservation.aggregate( [
    { $match: { reservationDate: { $gte: new Date(req.query.start), $lte: new Date(req.query.end) } } },
    { $group: { _id: "$cubicle", ingresos: { $sum: 1 } } },
    { $sort: { _id: 1 } }
    ])

  findReservationsCubicle.then(data => {
    if (data) return res.json(data)
    return res.status(404).send({message: 'Page not found'})
  }).catch(err => {
    res.status(500).send({message: `Error del server ${err}`})
  })
}

function getReportsByCareer(req, res) {
  let findReservationsCareer = Reservation.aggregate( [
    { $match: { reservationDate: { $gte: new Date(req.query.start), $lte: new Date(req.query.end) } } },
    { $group: { _id: "$user.career", ingresos: { $sum: 1 } } }  ])

  findReservationsCareer.then(data => {
    if (data) return res.json(data)
    return res.status(404).send({message: 'Page not found'})
  }).catch(err => {
    res.status(500).send({message: `Error del server ${err}`})
  })
}

function getReportsByDay(req, res) {
  let findReservationsDay = Reservation.aggregate( [
    { $project: { shortDate: { $dateToString: { format: "%Y-%m-%d", date: "$reservationDate" } } } },
    { $match: { shortDate: { $gte: req.query.start, $lte: req.query.end } } },
    { $group: { _id: "$shortDate", ingresos: { $sum: 1 } } }  ]).sort({_id: 1})

  findReservationsDay.then(data => {
    if (data) return res.json(data)
    return res.status(404).send({message: 'Page not found'})
  }).catch(err => {
    return res.status(500).send({message: `Error del server ${err}`})
  })
}

// function getReportsByDepartment(req, res) {
//   let findReservationsByDepartment = Reservation.aggregate([{ $group: { _id: "$"}}])
// }

module.exports = {
  getReportsByCareer,
  getReportsByCubicle,
  getReportsByDivision,
  getReportsByDay
}
