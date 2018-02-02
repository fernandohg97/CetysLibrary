'use strict'

const express = require('express')
const employeeRouter = express.Router()
const employeeCtrl = require('../controllers/employee.controller')
const created = require('../middlewares/employeeCreated')

employeeRouter.get('/employees', employeeCtrl.getEmployees)

employeeRouter.get('/employees/:employee_id', employeeCtrl.getEmployee)

employeeRouter.post('/employees', created.isCreated, employeeCtrl.createEmployee)

employeeRouter.put('/employees/:employee_id', employeeCtrl.updateEmployee)

employeeRouter.delete('/employees/:employee_id', employeeCtrl.removeEmployee)

employeeRouter.delete('/employees', employeeCtrl.removeEmployees)

module.exports = employeeRouter
