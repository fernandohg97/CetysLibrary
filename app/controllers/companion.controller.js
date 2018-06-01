'use strict'

const express = require('express') // import express library
const Companion = require('../models/companion/companion.model') // Import career model
const fs = require('fs'); // import file system library

// Get all careers from database
function getCompanions(req, res) {
  let findCompanions = Companion.find()

  findCompanions.then(companions => {
    res.json(companions)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Get the maximun number of documents in database
function getCompanionsCount(req, res) {
  let countCompanions = Companion.find().count()
  countCompanions.then(companion => {
    res.json(companion)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
  })
}

// Get careers specifying the division (PREPARATORIA, INGENIERIA, ADMINISTRACION Y NEGOCIOS, ETC.)
// function getCareersByDivision (req, res) {
//   let findCompanionsByDivision = Career.find({area: req.query.area, active: true})
//
//   findCompanionsByDivision.then(careers => {
//     res.json(careers)
//   })
//   .catch(err => {
//     res.status(500).send(`Error del server ${err}`)
//   })
// }

// Get companion by id
function getCompanion(req, res) {
  let findCompanion = Companion.findById(req.params.companion_id)

  findCompanion.then(companion => {
    if (companion) {
      res.status(200).json(companion)
    } else {
      res.status(404).send({message: 'Page not found'})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Get companion by reservation id
function getCompanionByReservation(req, res) {
  let findCompanion = Companion.findOne(req.params)

  findCompanion.then(companion => {
    if (companion) {
      res.status(200).json(companion)
    } else {
      res.status(404).send({message: 'Page not found'})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Create new companion
function createCompanion(req, res) {
  let companions = req.body // get the request form data
  if (companions.length > 1) { // In case we upload a file with new companions
    Companion.insertMany(companions).then(companions => {
      res.status(200).json({message: 'Companions successfully created', companions: companions})
    }).catch(err => {
      res.status(500).send({message: `Error del server ${err}`})
    })
  } else { // In case we only create one companion
    let newCompanion = new Companion(companions)
    let createCompanion = newCompanion.save()
    createCompanion.then(companion => {
      return res.status(200).json({message: 'Companion successfully created', companion: companion})
    }).catch(err => {
      return res.status(500).send(err)
    })
  }
}

// Create local file with all careers from database
// function createCareersFile(req, res) {
//   let rootFile = `${__dirname}/carreras.json`
//   let content = Career.find({}, {_id: 0, __v: 0})
//   content.then(data => {
//     data = JSON.stringify(data)
//     fs.writeFile(rootFile, data, 'utf-8', (err) => {
//       if (err) return res.status(500).send('Error al crear el archivo ' + err)
//       return res.status(200).send({message: 'File was saved'})
//     })
//   }).catch(err => res.status(500).send({message: `Error del server ${err}`}))
// }

// Remove local file with all careers
// function removeCareersFile(req, res) {
//   let rootFile = `${__dirname}/carreras.json`
//   fs.unlink(rootFile, (err) => {
//     if (err) throw err;
//     return res.status(200).send({message: 'carreras.json successfully deleted'})
//   });
// }

// Download local file with all careers
// function downloadCareersFile(req, res) {
//   let rootFile = `${__dirname}/carreras.json`
//   res.download(rootFile, 'carreras.json')
// }

// Update specific career from database
function updateCompanion(req, res) {
  let updateCompanion = Companion.findByIdAndUpdate(req.params.companion_id, req.body)

  updateCompanion.then(career => {
    res.json({message: 'Companion updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar el acompanante: ${err}`})
  })
}
// Delete specific career from database
function removeCompanion(req, res) {
  let removeCompanion = Companion.findByIdAndRemove(req.params.companion_id)

  removeCompanion.then(career => {
    res.json({message: 'Companion deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar el acompanante: ${err}`})
  })
}
// Delete all careers from database
function removeCompanions(req, res) {
  let removeCompanions = Companion.deleteMany({})

  removeCompanions.then(response => {
    res.json({message: 'Companions deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar las carreras: ${err}`})
  })
}

module.exports = {
  getCompanions,
  // getCareersByDivision,
  getCompanionsCount,
  getCompanion,
  getCompanionByReservation,
  createCompanion,
  // createCareersFile,
  // downloadCareersFile,
  // removeCareersFile,
  updateCompanion,
  removeCompanion,
  removeCompanions
}
