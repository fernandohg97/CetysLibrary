'use strict'

const express = require('express')
const ExternalUser = require('../models/externalUser/externalUser.model')

function getExternalUsers(req, res) {
  let findExternalUsers = ExternalUser.find()

  findExternalUsers.then(users => {
    res.json(users)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

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

function updateExternalUser(req, res) {
  let updateExternalUser = ExternalUser.findByIdAndUpdate(req.params.externalUser_id, req.body)

  updateExternalUser.then(user => {
    res.json({message: 'External user updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar el usuario: ${err}`})
  })
}

function removeExternalUser(req, res) {
  let removeExternalUser = ExternalUser.findByIdAndRemove(req.params.career_id)

  removeExternalUser.then(user => {
    res.json({message: 'External user deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar el usuario: ${err}`})
  })
}

module.exports = {
  getExternalUsers,
  getExternalUser,
  createExternalUser,
  updateExternalUser,
  removeExternalUser
}
