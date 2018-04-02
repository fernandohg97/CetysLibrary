'use strict'

const Employee = require('../models/employee/employee.model') // import employee model
// Get employees and validate if a employee exist
exports.isCreated = function (req, res, next) {
  let dbEmployees = [] // Employees in database
  let employeesUser = req.body // Employees from user
  Employee.find((err, employees) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (employees) {
      dbEmployees = employees
      let value = checkEmployees(dbEmployees, employeesUser)
      if (value) return res.status(403).send({ // In case a department exist
        existEmployee: 'Este empleado ya existe',
        existEmployees: 'Hay empleados ya existentes en el archivo'
      })
      next()
    }
  })
}
// Check if employee or employees are alredy in database
function checkEmployees (employees, employeesUser) {
  let exist = false
  if (employeesUser.length == undefined) { // In case is only one employee
    employees.forEach(employee => {
      if (employee.employeeNumber === employeesUser.employeeNumber) {
        exist = true
      }
    })
  } else { // In case there are many employees that want to be created
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
