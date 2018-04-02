'use strict'

const express = require('express')
const externalUserRouter = express.Router()
const externalUserCtrl = require('../controllers/externalUser.controller')
const created = require('../middlewares/externalUserCreated')
// Endpoints
externalUserRouter.get('/externalUsers', externalUserCtrl.getExternalUsers) // Get all external users

externalUserRouter.get('/externalUsers/count', externalUserCtrl.getExternalUsersCount) // Get the maximun number of external users

externalUserRouter.get('/externalUsers/:externalUser_id', externalUserCtrl.getExternalUser) // Get external user by id

externalUserRouter.get('/externalUsers/userCode/:userCode', externalUserCtrl.getByUserCode) // Get external user by user code

externalUserRouter.post('/externalUsers', created.isCreated, externalUserCtrl.createExternalUser) // Create external user

externalUserRouter.put('/externalUsers/:externalUser_id', externalUserCtrl.updateExternalUser) // Update external user

externalUserRouter.delete('/externalUsers/:externalUser_id', externalUserCtrl.removeExternalUser) // Delete external user by id

module.exports = externalUserRouter
