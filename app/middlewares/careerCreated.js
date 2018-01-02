'use strict'

const Career = require('../models/career/career.model')

exports.isCreated = function (req, res, next) {
  let dbCareers = []
  let careersUser = req.body
  Career.find((err, careers) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (careers) {
      dbCareers = careers
      let value = checkCareers(dbCareers, careersUser)
      if (value) return res.status(403).send({
        existCareer: 'Esta carrera ya existe',
        existCareers: 'Hay carreras ya existentes en el archivo'
      })
      next()
    }
  })
}

function checkCareers (careers, careersUser) {
  let exist = false
  if (careersUser.length == undefined) {
    careers.forEach(career => {
      if (career.careerCode === careersUser.careerCode) {
        exist = true
      }
    })
  } else {
    careers.forEach(career => {
      for (var i = 0; i < careersUser.length; i++) {
        if (career.careerCode === careersUser[i].careerCode) {
          exist = true
        }
      }
    })
  }
  return exist
}
