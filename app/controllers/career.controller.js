'use strict'

const express = require('express')
const Career = require('../models/career/career.model')
const fs = require('fs');

function getCareers(req, res) {
  let findCareers = Career.find()

  findCareers.then(careers => {
    res.json(careers)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

function getCareersCount(req, res) {
  let countCareers = Career.find().count()
  countCareers.then(career => {
    res.json(career)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
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

function createCareersFile(req, res) {
  let rootFile = `${__dirname}/carreras.json`
  let content = Career.find({}, {_id: 0, __v: 0})
  content.then(data => {
    data = JSON.stringify(data)
    fs.writeFile(rootFile, data, 'utf-8', (err) => {
      if (err) return res.status(500).send('Error al crear el archivo ' + err)
      return res.status(200).send({message: 'File was saved'})
    })
  }).catch(err => res.status(500).send({message: `Error del server ${err}`}))
}

function removeCareersFile(req, res) {
  let rootFile = `${__dirname}/carreras.json`
  fs.unlink(rootFile, (err) => {
    if (err) throw err;
    return res.status(200).send({message: 'carreras.json successfully deleted'})
  });
}

function downloadCareersFile(req, res) {
  let rootFile = `${__dirname}/carreras.json`
  res.download(rootFile, 'carreras.json')
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

function removeCareers(req, res) {
  let removeCareers = Career.remove({})

  removeCareers.then(response => {
    res.json({message: 'Careers deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar las carreras: ${err}`})
  })
}

module.exports = {
  getCareers,
  getCareersByDivision,
  getCareersCount,
  getCareer,
  createCareer,
  createCareersFile,
  downloadCareersFile,
  removeCareersFile,
  updateCareer,
  removeCareer,
  removeCareers
}
