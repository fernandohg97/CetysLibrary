'use strict'

const express = require('express')
const departmentRouter = express.Router()
const departmentCtrl = require('../controllers/department.controller')
const created = require('../middlewares/departmentCreated')

departmentRouter.get('/departments', departmentCtrl.getDepartments)

departmentRouter.get('/departments/:department_id', departmentCtrl.getDepartment)

departmentRouter.post('/departments', created.isCreated, departmentCtrl.createDepartment)

departmentRouter.put('/departments/:department_id', departmentCtrl.updateDepartment)

departmentRouter.delete('/departments/:department_id', departmentCtrl.removeDepartment)

module.exports = departmentRouter
