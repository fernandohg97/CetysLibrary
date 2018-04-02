'use strict'

const express = require('express') // import express library
const employeeRouter = express.Router() // declare routes with express
const employeeCtrl = require('../controllers/employee.controller') // import employee controller
const created = require('../middlewares/employeeCreated') // import employee middleware
// Endpoints
employeeRouter.get('/employees', employeeCtrl.getEmployees) // Get all employees

employeeRouter.get('/employees/count', employeeCtrl.getEmployeesCount) // Get the maximun number of employees

employeeRouter.get('/employees/file', employeeCtrl.createEmployeesFile) // Create employees local file

employeeRouter.get('/employees/download', employeeCtrl.downloadEmployeesFile) // Download employees local file

employeeRouter.get('/employees/remove', employeeCtrl.removeEmployeesFile) // Remove employees local file

employeeRouter.get('/employees/:employee_id', employeeCtrl.getEmployee) // Get employee by id

employeeRouter.post('/employees', created.isCreated, employeeCtrl.createEmployee) // Create employee

employeeRouter.put('/employees/:employee_id', employeeCtrl.updateEmployee) // Update employee

employeeRouter.delete('/employees/:employee_id', employeeCtrl.removeEmployee) // Delete employee by id

employeeRouter.delete('/employees', employeeCtrl.removeEmployees) // Delete all employees

module.exports = employeeRouter
