'use strict'

const express = require('express') // import express library
const userRouter = express.Router() // declare router with express
const userCtrl = require('../controllers/user.controller') // import user controller
const created = require('../middlewares/userCreated') // import user middleware
// Endpoints
userRouter.get('/users', userCtrl.getUsers) // Get all users

userRouter.get('/users/count', userCtrl.getUsersCount) // Get the maximun number of users

userRouter.get('/users/recent', userCtrl.getUsersRecent) // Get the last 100 users

userRouter.get('/users/file', userCtrl.createUsersFile) // Create users local file

userRouter.get('/users/download', userCtrl.downloadUsersFile) // Download users local file

userRouter.get('/users/remove', userCtrl.removeUsersFile) // Remove users local file

userRouter.get('/users/:user_id', userCtrl.getUser) // Get user by id

userRouter.get('/users/registrationNumber/:registrationNumber', userCtrl.getUserByRegistrationNumber) // Get user by registrationNumber(matricula)

userRouter.post('/users', created.isCreated, userCtrl.createUser) // Create user

userRouter.put('/users/:user_id', userCtrl.updateUser) // Update user

userRouter.delete('/users/:user_id', userCtrl.removeUser) // Delete user by id

userRouter.delete('/users', userCtrl.removeUsers) // Delete all users

module.exports = userRouter
