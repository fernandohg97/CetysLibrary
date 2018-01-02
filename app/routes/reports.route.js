'use strict'

const express = require('express')
const reportsRouter = express.Router()
const app = express()
const reportsCtrl = require('../controllers/reportsReservation.controller')

reportsRouter.get('/reportsDivision', reportsCtrl.getReportsByDivision)

reportsRouter.get('/reportsCareer', reportsCtrl.getReportsByCareer)

reportsRouter.get('/reportsCubicle', reportsCtrl.getReportsByCubicle)

reportsRouter.get('/reportsDay', reportsCtrl.getReportsByDay)

module.exports = reportsRouter
