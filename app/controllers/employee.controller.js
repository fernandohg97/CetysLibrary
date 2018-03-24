'use strict'

const express = require('express')
const Employee = require('../models/employee/employee.model')
const fs = require('fs');

// Get all employees from database
function getEmployees(req, res) {
  let findEmployees = Employee.find().sort({employeeNumber: -1})

  findEmployees.then(employees => {
    res.json(employees)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}
// Get the maximun number of documents in database
function getEmployeesCount(req, res) {
  let countEmployees = Employee.find().count()
  countEmployees.then(employees => {
    res.json(employees)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
  })
}

// Get employee by id
function getEmployee(req, res) {
  let findEmployee = Employee.findById(req.params.employee_id)

  findEmployee.then(employee => {
    if (employee) {
      res.status(200).json(employee)
    } else {
      res.status(404).send({message: 'Page not found'})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Create new employee
function createEmployee(req, res) {
  let employees = req.body // get the request form data
  if (employees.length > 1) { // in case we upload a file with new employees
    Employee.insertMany(employees).then(employees => {
      res.status(200).json({message: 'Employees successfully created'})
    }).catch(err => {
      res.status(500).send({message: `Error del server ${err}`})
    })
  } else { // in case we only create one employee
    let newEmployee = new Employee(employees)
    let createEmployee = newEmployee.save()
    createEmployee.then(employee => {
      return res.status(200).json({message: 'Employee successfully created'})
    }).catch(err => {
      return res.status(500).send(err)
    })
  }
}

// Create a local file with all employees from database
function createEmployeesFile(req, res) {
  let rootFile = `${__dirname}/empleados.json`
  let content = Employee.find({}, {_id: 0, __v: 0}).sort({employeeNumber: -1})
  content.then(data => {
    data = JSON.stringify(data)
    fs.writeFile(rootFile, data, 'utf-8', (err) => {
      if (err) return res.status(500).send('Error al crear el archivo ' + err)
      return res.status(200).send({message: 'File was saved'})
    })
  }).catch(err => res.status(500).send({message: `Error del server ${err}`}))
}

// Remove local file with all employees
function removeEmployeesFile(req, res) {
  let rootFile = `${__dirname}/empleados.json`
  fs.unlink(rootFile, (err) => {
    if (err) throw err;
    return res.status(200).send({message: 'empleados.json successfully deleted'})
  });
}

// Download local file with all employees
function downloadEmployeesFile(req, res) {
  let rootFile = `${__dirname}/empleados.json`
  res.download(rootFile, 'empleados.json')
}

// Update specific employee from database
function updateEmployee(req, res) {
  let updateEmployee = Employee.findByIdAndUpdate(req.params.employee_id, req.body)

  updateEmployee.then(employee => {
    res.json({message: 'Employee updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar el empleado: ${err}`})
  })
}

// Delete specific employee from database
function removeEmployee(req, res) {
  let removeEmployee = Employee.findByIdAndRemove(req.params.employee_id)

  removeEmployee.then(employee => {
    res.json({message: 'Employee deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar el empleado: ${err}`})
  })
}

// Delete all employees from database
function removeEmployees(req, res) {
  let removeEmployees = Employee.remove({})

  removeEmployees.then(response => {
    res.json({message: 'Employees deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar los empleados: ${err}`})
  })
}

module.exports = {
  getEmployees,
  getEmployeesCount,
  getEmployee,
  createEmployee,
  createEmployeesFile,
  downloadEmployeesFile,
  removeEmployeesFile,
  updateEmployee,
  removeEmployee,
  removeEmployees
}
