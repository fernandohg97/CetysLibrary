'use strict'

const Employee = require('../models/employee/employee.model')

exports.isCreated = function (req, res, next) {
  let dbEmployees = []
  let employeesUser = req.body
  Employee.find((err, employees) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (employees) {
      dbEmployees = employees
      let value = checkEmployees(dbEmployees, employeesUser)
      if (value) return res.status(403).send({
        existEmployee: 'Este empleado ya existe',
        existEmployees: 'Hay empleados ya existentes en el archivo'
      })
      next()
    }
  })
}

function checkEmployees (employees, employeesUser) {
  let exist = false
  if (employeesUser.length == undefined) {
    employees.forEach(employee => {
      if (employee.employeeNumber === employeesUser.employeeNumber) {
        exist = true
      }
    })
  } else {
    employees.forEach(employee => {
      for (var i = 0; i < employeesUser.length; i++) {
        if (employee.employeeNumber === employeesUser[i].employeeNumber) {
          exist = true
        }
      }
    })
  }
  return exist
}
