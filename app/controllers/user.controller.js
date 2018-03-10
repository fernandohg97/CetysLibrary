'use strict'

const express = require('express')
const User = require('../models/user/user.model')
const Employee = require('../models/employee/employee.model')
const fs = require('fs');

function getUsers(req, res) {
  let findUsers = User.find().sort({registrationNumber: -1})

  findUsers.then(users => {
    res.json(users)
  })
  .catch(err => {
    res.status(500).send({message: `Page not found: ${err}`})
  })
}

function getUsersCount(req, res) {
  let countUsers = User.find().count()
  countUsers.then(users => {
    res.json(users)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
  })
}

function getUsersRecent(req, res) {
  let findUsers = User.find().sort({registrationNumber: -1}).limit(100)

  findUsers.then(users => {
    res.json(users)
  })
  .catch(err => {
    res.status(500).send({message: `Page not found: ${err}`})
  })
}

function getUser(req, res) {
  let findUser = User.findById(req.params.user_id)

  findUser.then(user => {
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

function getUserByRegistrationNumber(req, res) {
  let findUserByNumber = User.findOne(req.params)

  findUserByNumber.then(user => {
    if (user) {
      return res.status(200).json({
        usuario: user,
        msg: 'El estudiante existe'
      })
    } else {
      Employee.findOne({employeeNumber: req.params.registrationNumber}).then(employee => {
        if (employee) {
          return res.status(200).json({
            empleado: employee,
            msg: 'El empleado existe'
          })
        } else {
          return res.status(404).send({messageUser: 'La matricula no se encuentra'})
        }
      }).catch(err => res.status(500).send({message: `Error del server: ${err}`}))
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

function createUser(req, res) {
  let users = req.body
  if (users.length > 1) {
    User.insertMany(users).then(users => {
      res.status(200).json({message: 'Students successfully created'})
    }).catch(err => {
      res.status(500).send({message: `Error del server ${err}`})
    })
  } else {
    let newUser = new User(users)
    let createUser = newUser.save()
    createUser.then(user => {
      return res.status(200).json({message: 'Student successfully created'})
    }).catch(err => {
      return res.status(500).send(err)
    })
  }
}

function createUsersFile(req, res) {
  let rootFile = `${__dirname}/usuarios.json`
  let content = User.find({}, {_id: 0, __v: 0}).sort({registrationNumber: -1})
  content.then(data => {
    data = JSON.stringify(data)
    fs.writeFile(rootFile, data, 'utf-8', (err) => {
      if (err) return res.status(500).send(`Error al crear el archivo: ${err}`)
      return res.status(200).send({message: 'File was saved'})
    })
  }).catch(err => res.status(500).send({message: `Error del server ${err}`}))
}

function removeUsersFile(req, res) {
  let rootFile = `${__dirname}/usuarios.json`
  fs.unlink(rootFile, (err) => {
    if (err) throw err;
    return res.status(200).send({message: 'usuarios.json successfully deleted'})
  });
}

function downloadUsersFile(req, res) {
  let rootFile = `${__dirname}/usuarios.json`
  res.download(rootFile, 'usuarios.json')
}

function updateUser(req, res) {
  let updateUser = User.findByIdAndUpdate(req.params.user_id, req.body)

  updateUser.then(user => {
    res.json({message: 'Student updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar el estudiante: ${err}`})
  })
}

function removeUser(req, res) {
  let removeUser = User.findByIdAndRemove(req.params.user_id)

  removeUser.then(user => {
    res.json({message: 'Student deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar el estudiante: ${err}`})
  })
}

function removeUsers(req, res) {
  let removeUsers = User.remove({})

  removeUsers.then(response => {
    res.json({message: 'Students deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar los estudiantes: ${err}`})
  })
}

module.exports = {
  getUsers,
  getUsersCount,
  getUsersRecent,
  getUser,
  getUserByRegistrationNumber,
  createUser,
  createUsersFile,
  downloadUsersFile,
  removeUsersFile,
  updateUser,
  removeUser,
  removeUsers
}
