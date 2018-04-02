'use strict'

const User = require('../models/user/user.model') // import user model
// Get users(students) and validate if a user exist
exports.isCreated = function (req, res, next) {
  let dbUsers = [] // Users in database
  let usersUser = req.body // Users (students) from user
  User.find((err, users) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (users) {
      dbUsers = users
      let value = checkUsers(dbUsers, usersUser)
      if (value) return res.status(403).send({ // In case a user (student) exist
        existUser: 'Este usuario ya existe',
        existUsers: 'Hay usuarios ya existentes en el archivo'
      })
      next()
    }
  })
}
// Check if user or users are alredy in database
function checkUsers (users, usersUser) {
  let exist = false
  if (usersUser.length == undefined) { // In case is only one student
    users.forEach(user => {
      if (user.registrationNumber === usersUser.registrationNumber) {
        exist = true
      }
    })
  } else { // In case there are many users(students) that want to be created
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
