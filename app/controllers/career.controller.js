'use strict'

const express = require('express') // import express library
const Career = require('../models/career/career.model') // Import career model
const fs = require('fs'); // import file system library

// Get all careers from database
function getCareers(req, res) {
  let findCareers = Career.find()

  findCareers.then(careers => {
    res.json(careers)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Get the maximun number of documents in database
function getCareersCount(req, res) {
  let countCareers = Career.find().count()
  countCareers.then(career => {
    res.json(career)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
  })
}

// Get careers specifying the division (PREPARATORIA, INGENIERIA, ADMINISTRACION Y NEGOCIOS, ETC.)
function getCareersByDivision (req, res) {
  let findCareersByDivision = Career.find({area: req.query.area, active: true})

  findCareersByDivision.then(careers => {
    res.json(careers)
  })
  .catch(err => {
    res.status(500).send(`Error del server ${err}`)
  })
}

// Get career by id
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

// Create new career
function createCareer(req, res) {
  let careers = req.body // get the request form data
  if (careers.length > 1) { // In case we upload a file with new careers
    Career.insertMany(careers).then(careers => {
      res.status(200).json({message: 'Careers successfully created'})
    }).catch(err => {
      res.status(500).send({message: `Error del server ${err}`})
    })
  } else { // In case we only create one career
    let newCareer = new Career(careers)
    let createCareer = newCareer.save()
    createCareer.then(career => {
      return res.status(200).json({message: 'Career successfully created'})
    }).catch(err => {
      return res.status(500).send(err)
    })
  }
}

// Create local file with all careers from database
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

// Remove local file with all careers
function removeCareersFile(req, res) {
  let rootFile = `${__dirname}/carreras.json`
  fs.unlink(rootFile, (err) => {
    if (err) throw err;
    return res.status(200).send({message: 'carreras.json successfully deleted'})
  });
}

// Download local file with all careers
function downloadCareersFile(req, res) {
  let rootFile = `${__dirname}/carreras.json`
  res.download(rootFile, 'carreras.json')
}

// Update specific career from database
function updateCareer(req, res) {
  let updateCareer = Career.findByIdAndUpdate(req.params.career_id, req.body)

  updateCareer.then(career => {
    res.json({message: 'Career updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar la carrera: ${err}`})
  })
}
// Delete specific career from database
function removeCareer(req, res) {
  let removeCareer = Career.findByIdAndRemove(req.params.career_id)

  removeCareer.then(career => {
    res.json({message: 'Career deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar ela carrera: ${err}`})
  })
}
// Delete all careers from database
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
