'use strict'

const express = require('express')
const Cubicle = require('../models/cubicle/cubicle.model')

function getCubicles (req, res) {
  let findCubicles = Cubicle.find().sort({cubicleNumber: 1})

  findCubicles.then(cubicles => {
    res.json(cubicles)
  })
  .catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

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

function createCubicle (req, res) {
  let cubicles = req.body
  if (cubicles.length > 1) {
    Cubicle.insertMany(cubicles).then(cubicles => {
      res.status(200).json({message: 'Cubicles successfully created'})
    }).catch(err => {
      res.status(500).send({message: `Error del server ${err}`})
    })
  } else {
    let newCubicle = new Cubicle(cubicles)
    let createCubicle = newCubicle.save()
    createCubicle.then(cubicle => {
      return res.status(200).json({message: 'Cubicle successfully created'})
    }).catch(err => {
      return res.status(500).send(err)
    })
  }
}

function updateCubicle (req, res) {
  let updateCubicle = Cubicle.findByIdAndUpdate(req.params.cubicle_id, req.body)

  updateCubicle.then(cubicle => {
    res.json({message: 'Cubicle updated successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo actualizar el cubiculo: ${err}`})
  })
}

function removeCubicle (req, res) {
  let removeCubicle = Cubicle.findByIdAndRemove(req.params.cubicle_id)

  removeCubicle.then(cubicle => {
    res.json({message: 'Cubicle deleted successfully'})
  })
  .catch(err => {
    res.status(500).send({message: `No se pudo eliminar el cubiculo: ${err}`})
  })
}

module.exports = {
  getCubicles,
  getCubicle,
  createCubicle,
  updateCubicle,
  removeCubicle
}
