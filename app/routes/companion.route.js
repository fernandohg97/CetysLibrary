'use strict'

const express = require('express') // import express library
const companionRouter = express.Router() // Declare router with express
const companionCtrl = require('../controllers/companion.controller') // import career controller

// Endpoints
companionRouter.get('/companions', companionCtrl.getCompanions) // Get all companions

companionRouter.get('/companions/count', companionCtrl.getCompanionsCount) // Get maximun number of companions

companionRouter.get('/companions/:companion_id', companionCtrl.getCompanion) // Get companion by id

companionRouter.get('/companions/reservation/:reservation', companionCtrl.getCompanionByReservation) // Get companion by id

companionRouter.post('/companions', companionCtrl.createCompanion) // Create companion

companionRouter.put('/companions/:companion_id', companionCtrl.updateCompanion) // Update companion

companionRouter.delete('/companions/:reservation', companionCtrl.removeCompanion) // Delete companion by reservation id

companionRouter.delete('/companions', companionCtrl.removeAll) // Delete all companions

module.exports = companionRouter
