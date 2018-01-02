'use strict'

const Department = require('../models/department/department.model')

exports.isCreated = function (req, res, next) {
  let dbDepartments = []
  let departmentsUser = req.body
  console.log(departmentsUser.length);
  Department.find((err, departments) => {
    if (err) return res.status(500).send({message: `Error del server ${err}`})
    if (departments) {
      console.log(departments);
      dbDepartments = departments
      let value = checkDepartments(dbDepartments, departmentsUser)
      if (value) return res.status(403).send({
        existDepartment: 'Este departamento ya existe',
        existDepartments: 'Hay departamentos ya existentes en el archivo'
      })
      next()
    }
  })
}

function checkDepartments (departments, departmentsUser) {
  let exist = false
  if (departmentsUser.length == undefined) {
    departments.forEach(department => {
      if (department.departmentCode != undefined && department.departmentCode === departmentsUser.departmentCode) {
        exist = true
      }
    })
  } else {
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
