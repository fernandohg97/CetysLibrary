'use strict'

const express = require('express')
const userRouter = express.Router()
const userCtrl = require('../controllers/user.controller')
const created = require('../middlewares/userCreated')

userRouter.get('/users', userCtrl.getUsers)

userRouter.get('/users/count', reservationCtrl.getUsersCount)

userRouter.get('/users/recent', userCtrl.getUsersRecent)

userRouter.get('/users/file', userCtrl.createUsersFile)

userRouter.get('/users/download', userCtrl.downloadUsersFile)

userRouter.get('/users/remove', userCtrl.removeUsersFile)

userRouter.get('/users/:user_id', userCtrl.getUser)

userRouter.get('/users/registrationNumber/:registrationNumber', userCtrl.getUserByRegistrationNumber)

userRouter.post('/users', created.isCreated, userCtrl.createUser)

userRouter.put('/users/:user_id', userCtrl.updateUser)

userRouter.delete('/users/:user_id', userCtrl.removeUser)

userRouter.delete('/users', userCtrl.removeUsers)

module.exports = userRouter
