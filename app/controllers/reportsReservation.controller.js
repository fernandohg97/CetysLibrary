'use strict'

const Reservation = require('../models/reservation/reservation.model')

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
    if (data) {
      let newData = data.filter(value => value._id != null)
      return res.json(newData)
    }
    return res.status(404).send({message: 'Page not found'})
  }).catch(err => {
    res.status(500).send({message: `Error del server ${err}`})
  })
}

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

function getReportsByCareerCompanions(req, res) {

  let findReservationsCareerCompanions = Reservation.aggregate( [
    { $match: { reservationDate: { $gte: new Date(req.query.start), $lte: new Date(req.query.end) } } },
    { $group: { _id: { userCareers: "$usersDetails.career", userDepartments: "$usersDetails.department" } } } ])

  findReservationsCareerCompanions.then(data => {
    if (data) {
      let newData = data.filter(value => value._id.length != 0)
      console.log(newData)
      return res.json(newData)
    }
    return res.status(404).send({message: 'Page not found'})
  }).catch(err => {
    res.status(500).send({message: `Error del server ${err}`})
  })
}

function getReportsByQuantityCompanions(req, res) {

  let findReservationsQuantityCompanions = Reservation.aggregate( [
    { $match: { reservationDate: { $gte: new Date(req.query.start), $lte: new Date(req.query.end) } } },
    { $group: { _id: "$usersDetails.quantity" } } ])

  findReservationsQuantityCompanions.then(data => {
    if (data) {
      let newData = data.filter(value => value._id.length != 0)
      console.log(newData);
      return res.json(newData)
    }
    return res.status(404).send({message: 'Page not found'})
  }).catch(err => {
    res.status(500).send({message: `Error del server ${err}`})
  })
}



function getReportsByDay(req, res) {
  console.log(req.query.start);
  console.log(req.query.end);
  let findReservationsDay = Reservation.aggregate( [
    { $project: { shortDate: { $dateToString: { format: "%G-%m-%d", date: "$reservationDate" } } } },
    { $match: { shortDate: { $gte: req.query.start, $lte: req.query.end } } },
    { $group: { _id: "$shortDate", ingresos: { $sum: 1 } } }  ]).sort({_id: 1})

  findReservationsDay.then(data => {
    if (data) {
      console.log(data);
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
  getReportsByQuantityCompanions,
  getReportsByExternalUser
}
