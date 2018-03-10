'use strict'

const express = require('express')
const departmentRouter = express.Router()
const departmentCtrl = require('../controllers/department.controller')
const created = require('../middlewares/departmentCreated')

departmentRouter.get('/departments', departmentCtrl.getDepartments)

departmentRouter.get('/departments/count', departmentCtrl.getDepartmentsCount)

departmentRouter.get('/departments/file', departmentCtrl.createDepartmentsFile)

departmentRouter.get('/departments/download', departmentCtrl.downloadDepartmentsFile)

departmentRouter.get('/departments/remove', departmentCtrl.removeDepartmentsFile)

departmentRouter.get('/departments/:department_id', departmentCtrl.getDepartment)

departmentRouter.get('/departments/number/:department', departmentCtrl.getDepartmentByNumber)

departmentRouter.post('/departments', created.isCreated, departmentCtrl.createDepartment)

departmentRouter.put('/departments/:department_id', departmentCtrl.updateDepartment)

departmentRouter.delete('/departments/:department_id', departmentCtrl.removeDepartment)

departmentRouter.delete('/departments', departmentCtrl.removeDepartments)

module.exports = departmentRouter
