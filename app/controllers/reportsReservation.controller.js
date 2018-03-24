'use strict'

const Reservation = require('../models/reservation/reservation.model') // import reservation model

// Get reservation reports by division
function getReportsByDivision(req, res) {
  let findReservationsDivision = Reservation.aggregate( [
    { $match: { reservationDate: { $gte: new Date(req.query.start), $lte: new Date(req.query.end) } } },
    { $group: { _id: "$user.division", "ingresos": { $sum: 1 } } }
   ])

  findReservationsDivision.then(data => {
    if (data) {
      let newData = data.filter(value => value._id != null)
      res.json(newData)
    } else {
      res.status(404).send({message: `Page not found`})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}
// Get reservation reports by department
function getReportsByDepartment(req, res) {
  let findReservationsDepartment = Reservation.aggregate( [
    { $match: { reservationDate: { $gte: new Date(req.query.start), $lte: new Date(req.query.end) } } },
    { $group: { _id: "$employee.department", "ingresos": { $sum: 1 } } }
   ])

  findReservationsDepartment.then(data => {
    if (data) {
      let newData = data.filter(value => value._id != null)
      res.json(newData)
    } else {
      res.status(404).send({message: `Page not found`})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}
// Get reservation reports by cubicle
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
// Get reservation reports by career
function getReportsByCareer(req, res) {
  let findReservationsCareer = Reservation.aggregate( [
    { $match: { reservationDate: { $gte: new Date(req.query.start), $lte: new Date(req.query.end) } } },
    { $group: { _id: "$user.career", ingresos: { $sum: 1 } } }  ])

  findReservationsCareer.then(data => {
    if (data) {
      let newData = data.filter(value => value._id != null)
      return res.json(newData)
    }
    return res.status(404).send({message: 'Page not found'})
  }).catch(err => {
    res.status(500).send({message: `Error del server ${err}`})
  })
}
// Get reservation reports by external user
function getReportsByExternalUser(req, res) {
  let findReservationsExternal = Reservation.aggregate( [
    { $match: { reservationDate: { $gte: new Date(req.query.start), $lte: new Date(req.query.end) } } },
    { $group: { _id: "$externalUser.userCode", ingresos: { $sum: 1 } } }  ])

  findReservationsExternal.then(data => {
    if (data) {
      let newData = data.filter(value => value._id != null)
      return res.json(newData)
    }
    return res.status(404).send({message: 'Page not found'})
  }).catch(err => {
    res.status(500).send({message: `Error del server ${err}`})
  })
}
// Get reservation reports by career name companions
function getReportsByCareerCompanions(req, res) {

  let findReservationsCareerCompanions = Reservation.aggregate( [
    { $match: { reservationDate: { $gte: new Date(req.query.start), $lte: new Date(req.query.end) } } },
    { $group: { _id: { userCareers: "$usersDetails.career", userDepartments: "$usersDetails.department" }, ingresos:  { $push: '$usersDetails.quantity' } } } ])

  findReservationsCareerCompanions.then(data => {
    if (data) return res.json(data)
    return res.status(404).send({message: 'Page not found'})
  }).catch(err => {
    res.status(500).send({message: `Error del server ${err}`})
  })
}

// Get reservation reports by day
function getReportsByDay(req, res) {
  let findReservationsDay = Reservation.aggregate( [
    { $project: { shortDate: { $dateToString: { format: "%G-%m-%d", date: "$reservationDate" } } } },
    { $match: { shortDate: { $gte: req.query.start, $lte: req.query.end } } },
    { $group: { _id: "$shortDate", ingresos: { $sum: 1 } } }  ]).sort({_id: 1})

  findReservationsDay.then(data => {
    if (data) {
      return res.json(data)
    }
    return res.status(404).send({message: 'Page not found'})
  }).catch(err => {
    return res.status(500).send({message: `Error del server ${err}`})
  })
}

module.exports = {
  getReportsByCareer,
  getReportsByCubicle,
  getReportsByDivision,
  getReportsByDay,
  getReportsByDepartment,
  getReportsByCareerCompanions,
  getReportsByExternalUser
}
