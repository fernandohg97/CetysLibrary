'use strict'

const Department = require('../models/department/department.model') // import department model
// Get departments and validate if a department exist
exports.isCreated = function (req, res, next) {
  let dbDepartments = [] // Departments in database
  let departmentsUser = req.body // Departments from user
  console.log(departmentsUser.length);
  Department.find((err, departments) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (departments) {
      console.log(departments);
      dbDepartments = departments
      let value = checkDepartments(dbDepartments, departmentsUser)
      if (value) return res.status(403).send({ // In case a department exist
        existDepartment: 'Este departamento ya existe',
        existDepartments: 'Hay departamentos ya existentes en el archivo'
      })
      next()
    }
  })
}
// Check if department or departments are alredy in database
function checkDepartments (departments, departmentsUser) {
  let exist = false
  if (departmentsUser.length == undefined) {// In case is only one department
    departments.forEach(department => {
      if (department.departmentCode != undefined && department.departmentCode === departmentsUser.departmentCode) {
        exist = true
      }
    })
  } else { // In case there are many departments that want to be created
    departments.forEach(department => {
      for (var i = 0; i < departmentsUser.length; i++) {
        if (department.departmentCode === departmentsUser[i].departmentCode) {
          exist = true
        }
      }
    })
  }
  return exist
}
