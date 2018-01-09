'use strict'

const express = require('express')
const externalUserRouter = express.Router()
const externalUserCtrl = require('../controllers/externalUser.controller')
const created = require('../middlewares/externalUserCreated')

externalUserRouter.get('/externalUsers', externalUserCtrl.getExternalUsers)

externalUserRouter.get('/externalUsers/:externalUser_id', externalUserCtrl.getExternalUser)

externalUserRouter.post('/externalUsers', created.isCreated, externalUserCtrl.createExternalUser)

externalUserRouter.put('/externalUsers/:externalUser_id', externalUserCtrl.updateExternalUser)

externalUserRouter.delete('/externalUsers/:externalUser_id', externalUserCtrl.removeExternalUser)

module.exports = externalUserRouter
