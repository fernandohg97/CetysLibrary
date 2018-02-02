'use strict'

const express = require('express')
const careerRouter = express.Router()
const careerCtrl = require('../controllers/career.controller')
const created = require('../middlewares/careerCreated')

careerRouter.get('/careers', careerCtrl.getCareers)

careerRouter.get('/careers/division', careerCtrl.getCareersByDivision)

careerRouter.get('/careers/:career_id', careerCtrl.getCareer)

careerRouter.post('/careers', created.isCreated, careerCtrl.createCareer)

careerRouter.put('/careers/:career_id', careerCtrl.updateCareer)

careerRouter.delete('/careers/:career_id', careerCtrl.removeCareer)

careerRouter.delete('/careers', careerCtrl.removeCareers)

module.exports = careerRouter
