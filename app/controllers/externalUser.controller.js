'use strict'

const express = require('express') // import express library
const ExternalUser = require('../models/externalUser/externalUser.model') // import external user model

// Get all external users from database
function getExternalUsers(req, res) {
  let findExternalUsers = ExternalUser.find()

  findExternalUsers.then(users => {
    res.json(users)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}
// Get the maximun number of documents in database
function getExternalUsersCount(req, res) {
  let countExternals = ExternalUser.find().count()
  countExternals.then(externals => {
    res.json(externals)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
  })
}

// Get external user by id
function getExternalUser(req, res) {
  let findCareer = ExternalUser.findById(req.params.externalUser_id)

  findCareer.then(user => {
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).send({message: 'Page not found'})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Get external user by user code
function getByUserCode(req, res) {
  let findUserByCode = ExternalUser.findOne(req.params)

  findUserByCode.then(externalUser => {
    if (externalUser) {
      return res.status(200).json({
        usuario: externalUser,
        msg: 'El usuario existe'
      })
    } else { return res.status(404).send({messageUser: 'El usuario no se encuentra'})}
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Create new external user
function createExternalUser(req, res) {
  let users = req.body
  if (users.length > 1) {
    ExternalUser.insertMany(users).then(users => {
      res.status(200).json({message: 'External users successfully created'})
    }).catch(err => {
      res.status(500).send({message: `Error del server ${err}`})
    })
  } else {
    let newExternalUser = new ExternalUser(users)
    let createExternalUser = newExternalUser.save()
    createExternalUser.then(user => {
      return res.status(200).json({message: 'External user successfully created'})
    }).catch(err => {
      return res.status(500).send(err)
    })
  }
}

// Update specific external user from database
function updateExternalUser(req, res) {
  let updateExternalUser = ExternalUser.findByIdAndUpdate(req.params.externalUser_id, req.body)

  updateExternalUser.then(user => {
    res.json({message: 'External user updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar el usuario: ${err}`})
  })
}

// Delete specific external user from database
function removeExternalUser(req, res) {
  let removeExternalUser = ExternalUser.findByIdAndRemove(req.params.externalUser_id)

  removeExternalUser.then(user => {
    res.json({message: 'External user deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar el usuario: ${err}`})
  })
}

module.exports = {
  getExternalUsers,
  getExternalUsersCount,
  getExternalUser,
  getByUserCode,
  createExternalUser,
  updateExternalUser,
  removeExternalUser
}
