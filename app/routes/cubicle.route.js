'use strict'

const express = require('express') // import express library
const cubicleRouter = express.Router() // declare router with express
const cubicleCtrl = require('../controllers/cubicle.controller') // import cubicle controller
const created = require('../middlewares/cubicleCreated') // import cubicle middleware
// Endpoints
cubicleRouter.get('/cubicles', cubicleCtrl.getCubicles) // Get all cubicles

cubicleRouter.get('/cubicles/count', cubicleCtrl.getCubiclesCount) // Get the maximun number of cubicles

cubicleRouter.get('/cubicles/file', cubicleCtrl.createCubiclesFile) // Create cubicles local file

cubicleRouter.get('/cubicles/download', cubicleCtrl.downloadCubiclesFile) // Download cubicles local file

cubicleRouter.get('/cubicles/remove', cubicleCtrl.removeCubiclesFile) // Remove cubicles local file

cubicleRouter.get('/cubicles/:cubicle_id', cubicleCtrl.getCubicle) // Get cubicle by id

cubicleRouter.post('/cubicles', created.isCreated, cubicleCtrl.createCubicle) // Create cubicle

cubicleRouter.put('/cubicles/:cubicle_id', cubicleCtrl.updateCubicle) // Update cubicle

cubicleRouter.delete('/cubicles/:cubicle_id', cubicleCtrl.removeCubicle) // Delete cubicle by id

cubicleRouter.delete('/cubicles', cubicleCtrl.removeCubicles) // Delete all cubicles

module.exports = cubicleRouter
