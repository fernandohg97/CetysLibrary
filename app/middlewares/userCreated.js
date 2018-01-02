'use strict'

const User = require('../models/user/user.model')

exports.isCreated = function (req, res, next) {
  let dbUsers = []
  let usersUser = req.body
  User.find((err, users) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (users) {
      dbUsers = users
      let value = checkUsers(dbUsers, usersUser)
      if (value) return res.status(403).send({
        existUser: 'Este usuario ya existe',
        existUsers: 'Hay usuarios ya existentes en el archivo'
      })
      next()
    }
  })
}

function checkUsers (users, usersUser) {
  let exist = false
  if (usersUser.length == undefined) {
    users.forEach(user => {
      if (user.registrationNumber === usersUser.registrationNumber) {
        exist = true
      }
    })
  } else {
    users.forEach(user => {
      for (var i = 0; i < usersUser.length; i++) {
        if (user.registrationNumber === usersUser[i].registrationNumber) {
          exist = true
        }
      }
    })
  }
  return exist
}
