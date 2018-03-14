'use strict'

const Career = require('../models/career/career.model') // import career model
// Get careers and validate if a career exist
exports.isCreated = function (req, res, next) {
  let dbCareers = [] // Careers in database
  let careersUser = req.body // Careers from user
  Career.find((err, careers) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (careers) {
      dbCareers = careers
      let value = checkCareers(dbCareers, careersUser)
      if (value) return res.status(403).send({ // In case a career exist
        existCareer: 'Esta carrera ya existe',
        existCareers: 'Hay carreras ya existentes en el archivo'
      })
      next()
    }
  })
}
// Check if career or careers are alredy in database
function checkCareers (careers, careersUser) {
  let exist = false
  if (careersUser.length == undefined) { // In case is only one career
    careers.forEach(career => {
      if (career.careerCode === careersUser.careerCode) {
        exist = true
      }
    })
  } else { // In case there are many careers that want to be created
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
