'use strict'

const ExternalUser = require('../models/externalUser/externalUser.model')

exports.isCreated = function (req, res, next) {
  let dbExternalUsers = []
  let externalUsersUser = req.body
  ExternalUser.find((err, externalUsers) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (externalUsers) {
      dbExternalUsers = externalUsers
      let value = checkExternalUsers(dbExternalUsers, externalUsersUser)
      if (value) return res.status(403).send({
        existExternalUser: 'Este usuario ya existe',
        existExternalUsers: 'Hay usuarios ya existentes en el archivo'
      })
      next()
    }
  })
}

function checkExternalUsers (externalUsers, externalUsersUser) {
  let exist = false
  if (externalUsersUser.length == undefined) {
    externalUsers.forEach(externalUser => {
      if (externalUser.userCode === externalUsersUser.userCode) {
        exist = true
      }
    })
  } else {
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
