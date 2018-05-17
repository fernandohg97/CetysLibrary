'use strict'

const express = require('express') // import express library
const reportsRouter = express.Router() // declare router with express
const reportsCtrl = require('../controllers/reportsReservation.controller') // import reports controller
// Endpoints
reportsRouter.get('/reportsDivision', reportsCtrl.getReportsByDivision) // Get reports by division

reportsRouter.get('/reportsCareer', reportsCtrl.getReportsByCareer) // Get reports by career

reportsRouter.get('/reportsCubicle', reportsCtrl.getReportsByCubicle) // Get reports by cubicle

reportsRouter.get('/reportsDay', reportsCtrl.getReportsByDay) // Get reports by day

reportsRouter.get('/reportsDepartment', reportsCtrl.getReportsByDepartment) // Get reports by department

reportsRouter.get('/reportsExternal', reportsCtrl.getReportsByExternalUser) // Get reports by external users

// reportsRouter.get('/reportsCompanionsCareer', reportsCtrl.getReportsByCareerCompanions) // Get reports by career name companions

reportsRouter.get('/reportsCompanionsCareer', reportsCtrl.getReportsByCompanionsCareer) // Get reports by CAREER

reportsRouter.get('/reportsCompanionsDep', reportsCtrl.getReportsByCompanionsDepartment) // Get reports by DEPARTMENT

module.exports = reportsRouter
