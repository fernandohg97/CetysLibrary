'use strict'

const Cubicle = require('../models/cubicle/cubicle.model') // import cubicle model
// Get cubicles and validate if a cubicle exist
exports.isCreated = function (req, res, next) {
  let dbCubicles = [] // Cubicles in database
  let cubiclesUser = req.body // Cubicles from the user
  Cubicle.find((err, cubicles) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (cubicles) {
      dbCubicles = cubicles
      let value = checkCubicles(dbCubicles, cubiclesUser)
      if (value) return res.status(403).send({ // In case a cubicle existe
        existCubicle: 'Este cubiculo ya existe',
        existCubicles: 'Hay cubiculos ya existentes en el archivo'
      })
      next()
    }
  })
}
// Check if cubicle or cubicles are alredy in database
function checkCubicles (cubicles, cubiclesUser) {
  let exist = false
  if (cubiclesUser.length == undefined) { // In case is only one cubicle
    cubicles.forEach(cubicle => {
      if (cubicle.cubicleNumber === cubiclesUser.cubicleNumber) {
        exist = true
      }
    })
  } else { // In case there are many cubicles that want to be created
    cubicles.forEach(cubicle => {
      for (var i = 0; i < cubiclesUser.length; i++) {
        if (cubicle.cubicleNumber === cubiclesUser[i].cubicleNumber) {
          exist = true
        }
      }
    })
  }
  return exist
}
