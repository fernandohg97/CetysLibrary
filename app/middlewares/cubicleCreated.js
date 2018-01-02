'use strict'

const Cubicle = require('../models/cubicle/cubicle.model')

exports.isCreated = function (req, res, next) {
  let dbCubicles = []
  let cubiclesUser = req.body
  Cubicle.find((err, cubicles) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (cubicles) {
      dbCubicles = cubicles
      let value = checkCubicles(dbCubicles, cubiclesUser)
      if (value) return res.status(403).send({
        existCubicle: 'Este cubiculo ya existe',
        existCubicles: 'Hay cubiculos ya existentes en el archivo'
      })
      next()
    }
  })
}

function checkCubicles (cubicles, cubiclesUser) {
  let exist = false
  if (cubiclesUser.length == undefined) {
    cubicles.forEach(cubicle => {
      if (cubicle.cubicleNumber === cubiclesUser.cubicleNumber) {
        exist = true
      }
    })
  } else {
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
