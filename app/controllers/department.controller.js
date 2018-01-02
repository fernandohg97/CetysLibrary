'use strict'

const express = require('express')
const Department = require('../models/department/department.model')

function getDepartments(req, res) {
  let findDepartments = Department.find().sort({departmentCode: 1})

  findDepartments.then(departments => {
    res.json(departments)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

function getDepartment(req, res) {
  let findDepartment = Department.findById(req.params.department_id)

  findDepartment.then(department => {
    if (department) {
      res.status(200).json(department)
    } else {
      res.status(404).send({message: 'Page not found'})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

function createDepartment(req, res) {
  let departments = req.body
  if (departments.length > 1) {
    Department.insertMany(departments).then(departments => {
      res.status(200).json({message: 'Departments successfully created'})
    }).catch(err => {
      res.status(500).send({message: `Error del server ${err}`})
    })
  } else {
    let newDepartment = new Department(departments)
    let createDepartment = newDepartment.save()
    createDepartment.then(department => {
      return res.status(200).json({message: 'Department successfully created'})
    }).catch(err => {
      return res.status(500).send(err)
    })
  }
}

function updateDepartment(req, res) {
  let updateDepartment = Department.findByIdAndUpdate(req.params.department_id, req.body)

  updateDepartment.then(department => {
    res.json({message: 'Department updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar el departmento: ${err}`})
  })
}

function removeDepartment(req, res) {
  let removeDepartment = Department.findByIdAndRemove(req.params.department_id)

  removeDepartment.then(department => {
    res.json({message: 'Department deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar el departmento: ${err}`})
  })
}

module.exports = {
  getDepartments,
  getDepartment,
  createDepartment,
  updateDepartment,
  removeDepartment
}
