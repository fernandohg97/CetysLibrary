'use strict'

const fs = require('fs') // import filesystem library
const express = require('express') // import express library
const Cubicle = require('../models/cubicle/cubicle.model') // import cubicle model

// Get all cubicles from database
function getCubicles (req, res) {
  let findCubicles = Cubicle.find().sort({cubicleNumber: 1})

  findCubicles.then(cubicles => {
    res.json(cubicles)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Get the maximun number of documents in database
function getCubiclesCount(req, res) {
  let countCubicles = Cubicle.find().count()
  countCubicles.then(cubicles => {
    res.json(cubicles)
  })
  .catch(err => {
    res.status(500).send({message: `Error del servidor: ${err}`})
  })
}

// Get cubicle by id from database
function getCubicle (req, res) {
  let findCubicle = Cubicle.findById(req.params.cubicle_id)

  findCubicle.then(cubicle => {
    if (cubicle) {
      res.status(200).json(cubicle)
    } else {
      res.status(404).send({message: 'Page not found'})
    }
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

// Create new cubicle
function createCubicle (req, res) {
  let cubicles = req.body // get the request form data
  if (cubicles.length > 1) { // in case we upload a file with new cubicles
    Cubicle.insertMany(cubicles).then(cubicles => {
      res.status(200).json({message: 'Cubicles successfully created'})
    }).catch(err => {
      res.status(500).send({message: `Error del server ${err}`})
    })
  } else { // in case we only create one cubicle
    let newCubicle = new Cubicle(cubicles)
    let createCubicle = newCubicle.save()
    createCubicle.then(cubicle => {
      return res.status(200).json({message: 'Cubicle successfully created'})
    }).catch(err => {
      return res.status(500).send(err)
    })
  }
}

// Create local file with all cubicles from database
function createCubiclesFile(req, res) {
  let rootFile = `${__dirname}/cubiculos.json`
  let content = Cubicle.find({}, {_id: 0, __v: 0}).sort({cubicleNumber: 1})
  content.then(data => {
    data = JSON.stringify(data)
    fs.writeFile(rootFile, data, 'utf-8', (err) => {
      if (err) return res.status(500).send('Error al crear el archivo ' + err)
      res.status(200).send({message: 'File was saved'})
    })
  }).catch(err => res.status(500).send({message: `Error del server ${err}`}))
}

// Remove local file with all cubicles
function removeCubiclesFile(req, res) {
  let rootFile = `${__dirname}/cubiculos.json`
  fs.unlink(rootFile, (err) => {
    if (err) throw err;
    return res.status(200).send({message: 'cubiculos.json successfully deleted'})
  });
}

// Download local file with all cubicles
function downloadCubiclesFile(req, res) {
  let rootFile = `${__dirname}/cubiculos.json`
  res.download(rootFile, 'cubiculos.json')
}

// Update specific cubicle from database
function updateCubicle (req, res) {
  let updateCubicle = Cubicle.findByIdAndUpdate(req.params.cubicle_id, req.body)

  updateCubicle.then(cubicle => {
    res.json({message: 'Cubicle updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar el cubiculo: ${err}`})
  })
}

// Delete specific cubicle from database
function removeCubicle (req, res) {
  let removeCubicle = Cubicle.findByIdAndRemove(req.params.cubicle_id)

  removeCubicle.then(cubicle => {
    res.json({message: 'Cubicle deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar el cubiculo: ${err}`})
  })
}

// Delete all careers from database
function removeCubicles (req, res) {
  let removeCubicles = Cubicle.remove({})

  removeCubicles.then(response => {
    res.json({message: 'Cubicles deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar los cubiculos: ${err}`})
  })
}

module.exports = {
  getCubicles,
  getCubiclesCount,
  getCubicle,
  createCubicle,
  createCubiclesFile,
  downloadCubiclesFile,
  removeCubiclesFile,
  updateCubicle,
  removeCubicle,
  removeCubicles
}
