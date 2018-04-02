'use strict'

const ExternalUser = require('../models/externalUser/externalUser.model') // import external user model
// Get external users and validate if a external user exist
exports.isCreated = function (req, res, next) {
  let dbExternalUsers = [] // External users in database
  let externalUsersUser = req.body // External users from user
  ExternalUser.find((err, externalUsers) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (externalUsers) {
      dbExternalUsers = externalUsers
      let value = checkExternalUsers(dbExternalUsers, externalUsersUser)
      if (value) return res.status(403).send({ // In case a external user exist
        existExternalUser: 'Este usuario ya existe',
        existExternalUsers: 'Hay usuarios ya existentes en el archivo'
      })
      next()
    }
  })
}
// Check if external user or external users are already in database
function checkExternalUsers (externalUsers, externalUsersUser) {
  let exist = false
  if (externalUsersUser.length == undefined) { // In case is only one external user
    externalUsers.forEach(externalUser => {
      if (externalUser.userCode === externalUsersUser.userCode.toUpperCase()) {
        exist = true
      }
    })
  } else { // In case there are many external users that want to be created
    externalUsers.forEach(externalUser => {
      for (var i = 0; i < externalUsersUser.length; i++) {
        if (externalUser.userCode === externalUsersUser[i].userCode) {
          exist = true
        }
      }
    })
  }
  return exist
}
