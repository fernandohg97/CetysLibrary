'use strict'

const express = require('express') // import express library
const departmentRouter = express.Router() // declare routes with express
const departmentCtrl = require('../controllers/department.controller') // import department controller
const created = require('../middlewares/departmentCreated') // import department middleware
// Endpoints
departmentRouter.get('/departments', departmentCtrl.getDepartments) // Get all departments

departmentRouter.get('/departments/count', departmentCtrl.getDepartmentsCount) // Get the maximun number of departments

departmentRouter.get('/departments/file', departmentCtrl.createDepartmentsFile) // Create departments local file

departmentRouter.get('/departments/download', departmentCtrl.downloadDepartmentsFile) // Download departments local file

departmentRouter.get('/departments/remove', departmentCtrl.removeDepartmentsFile) // Remove departments local file

departmentRouter.get('/departments/:department_id', departmentCtrl.getDepartment) // Get department by id

departmentRouter.get('/departments/number/:department', departmentCtrl.getDepartmentByNumber) // Get department by department number

departmentRouter.post('/departments', created.isCreated, departmentCtrl.createDepartment) // Create department

departmentRouter.put('/departments/:department_id', departmentCtrl.updateDepartment) // Update department

departmentRouter.delete('/departments/:department_id', departmentCtrl.removeDepartment) // Delete department by id

departmentRouter.delete('/departments', departmentCtrl.removeDepartments) // Delete all departments

module.exports = departmentRouter
