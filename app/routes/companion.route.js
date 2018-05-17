'use strict'

const express = require('express') // import express library
const companionRouter = express.Router() // Declare router with express
const companionCtrl = require('../controllers/companion.controller') // import career controller

// Endpoints
companionRouter.get('/companions', companionCtrl.getCompanions) // Get all companions

companionRouter.get('/companions/count', companionCtrl.getCompanionsCount) // Get maximun number of companions

// careerRouter.get('/careers/file', careerCtrl.createCareersFile) // Create careers local file

// careerRouter.get('/careers/download', careerCtrl.downloadCareersFile) // Download careers local file

// careerRouter.get('/careers/remove', careerCtrl.removeCareersFile) // Remove careers local file

// careerRouter.get('/careers/division', careerCtrl.getCareersByDivision) // Get careers by division

companionRouter.get('/companions/:companion_id', companionCtrl.getCompanion) // Get companion by id

companionRouter.post('/companions', companionCtrl.createCompanion) // Create companion

companionRouter.put('/companions/:companion_id', companionCtrl.updateCompanion) // Update companion

companionRouter.delete('/companions/:companion_id', companionCtrl.removeCompanion) // Delete companion by id

companionRouter.delete('/companions', companionCtrl.removeCompanions) // Delete all companions

module.exports = companionRouter
