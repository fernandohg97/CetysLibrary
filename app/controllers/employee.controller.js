'use strict'

const express = require('express')
const Employee = require('../models/employee/employee.model')

function getEmployees(req, res) {
  let findEmployees = Employee.find().sort({employeeNumber: -1})

  findEmployees.then(employees => {
    res.json(employees)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

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

function createEmployee(req, res) {
  let employees = req.body
  if (employees.length > 1) {
    Employee.insertMany(employees).then(employees => {
      res.status(200).json({message: 'Employees successfully created'})
    }).catch(err => {
      res.status(500).send({message: `Error del server ${err}`})
    })
  } else {
    let newEmployee = new Employee(employees)
    let createEmployee = newEmployee.save()
    createEmployee.then(employee => {
      return res.status(200).json({message: 'Employee successfully created'})
    }).catch(err => {
      return res.status(500).send(err)
    })
  }
}

function updateEmployee(req, res) {
  let updateEmployee = Employee.findByIdAndUpdate(req.params.employee_id, req.body)

  updateEmployee.then(employee => {
    res.json({message: 'Employee updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar el empleado: ${err}`})
  })
}

function removeEmployee(req, res) {
  let removeEmployee = Employee.findByIdAndRemove(req.params.employee_id)

  removeEmployee.then(employee => {
    res.json({message: 'Employee deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar el empleado: ${err}`})
  })
}

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
  getEmployee,
  createEmployee,
  updateEmployee,
  removeEmployee,
  removeEmployees
}
