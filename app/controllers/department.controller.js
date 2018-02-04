'use strict'

const express = require('express')
const Department = require('../models/department/department.model')
const fs = require('fs');

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

function getDepartmentByNumber(req, res) {
  let findDepartment = Department.findOne({departmentCode: req.params.department})

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

function createDepartmentsFile(req, res) {
  let rootFile = `${__dirname}/departamentos.json`
  let content = Department.find({}, {_id: 0, __v: 0}).sort({departmentCode: 1})
  content.then(data => {
    data = JSON.stringify(data)
    fs.writeFile(rootFile, data, 'utf-8', (err) => {
      if (err) return res.status(500).send('Error al crear el archivo ' + err)
      return res.status(200).send({message: 'File was saved'})
    })
  }).catch(err => res.status(500).send({message: `Error del server ${err}`}))
}

function removeDepartmentsFile(req, res) {
  let rootFile = `${__dirname}/departamentos.json`
  fs.unlink(rootFile, (err) => {
    if (err) throw err;
    return res.status(200).send({message: 'departamentos.json successfully deleted'})
  });
}

function downloadDepartmentsFile(req, res) {
  let rootFile = `${__dirname}/departamentos.json`
  res.download(rootFile, 'departamentos.json')
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

function removeDepartments(req, res) {
  let removeDepartments = Department.remove({})

  removeDepartments.then(response => {
    res.json({message: 'Departments deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar los departamentos: ${err}`})
  })
}

module.exports = {
  getDepartments,
  getDepartment,
  getDepartmentByNumber,
  createDepartment,
  createDepartmentsFile,
  downloadDepartmentsFile,
  removeDepartmentsFile,
  updateDepartment,
  removeDepartment,
  removeDepartments
}
