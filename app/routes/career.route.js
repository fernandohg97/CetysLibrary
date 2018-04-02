'use strict'

const express = require('express') // import express library
const careerRouter = express.Router() // Declare router with express
const careerCtrl = require('../controllers/career.controller') // import career controller
const created = require('../middlewares/careerCreated') // import career middleware
// Endpoints
careerRouter.get('/careers', careerCtrl.getCareers) // Get all careers

careerRouter.get('/careers/count', careerCtrl.getCareersCount) // Get maximun number of careers

careerRouter.get('/careers/file', careerCtrl.createCareersFile) // Create careers local file

careerRouter.get('/careers/download', careerCtrl.downloadCareersFile) // Download careers local file

careerRouter.get('/careers/remove', careerCtrl.removeCareersFile) // Remove careers local file

careerRouter.get('/careers/division', careerCtrl.getCareersByDivision) // Get careers by division

careerRouter.get('/careers/:career_id', careerCtrl.getCareer) // Get career by id

careerRouter.post('/careers', created.isCreated, careerCtrl.createCareer) // Create career

careerRouter.put('/careers/:career_id', careerCtrl.updateCareer) // Update career

careerRouter.delete('/careers/:career_id', careerCtrl.removeCareer) // Delete career by id

careerRouter.delete('/careers', careerCtrl.removeCareers) // Delete all careers

module.exports = careerRouter
