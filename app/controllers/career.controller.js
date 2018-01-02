'use strict'

const express = require('express')
const Career = require('../models/career/career.model')

function getCareers(req, res) {
  let findCareers = Career.find()

  findCareers.then(careers => {
    res.json(careers)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

function getCareersByDivision (req, res) {
  let findCareersByDivision = Career.find({area: req.query.area, active: true})

  findCareersByDivision.then(careers => {
    res.json(careers)
  })
  .catch(err => {
    res.status(500).send(`Error del server ${err}`)
  })
}

function getCareer(req, res) {
  let findCareer = Career.findById(req.params.career_id)

  findCareer.then(career => {
    if (career) {
      res.status(200).json(career)
    } else {
      res.status(404).send({message: 'Page not found'})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

function createCareer(req, res) {
  let careers = req.body
  if (careers.length > 1) {
    Career.insertMany(careers).then(careers => {
      res.status(200).json({message: 'Careers successfully created'})
    }).catch(err => {
      res.status(500).send({message: `Error del server ${err}`})
    })
  } else {
    let newCareer = new Career(careers)
    let createCareer = newCareer.save()
    createCareer.then(career => {
      return res.status(200).json({message: 'Career successfully created'})
    }).catch(err => {
      return res.status(500).send(err)
    })
  }
}

function updateCareer(req, res) {
  let updateCareer = Career.findByIdAndUpdate(req.params.career_id, req.body)

  updateCareer.then(career => {
    res.json({message: 'Career updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar la carrera: ${err}`})
  })
}

function removeCareer(req, res) {
  let removeCareer = Career.findByIdAndRemove(req.params.career_id)

  removeCareer.then(career => {
    res.json({message: 'Career deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar ela carrera: ${err}`})
  })
}

module.exports = {
  getCareers,
  getCareersByDivision,
  getCareer,
  createCareer,
  updateCareer,
  removeCareer
}
