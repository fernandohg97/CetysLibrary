'use strict'

const express = require('express')
const cubicleRouter = express.Router()
const cubicleCtrl = require('../controllers/cubicle.controller')
const created = require('../middlewares/cubicleCreated')

cubicleRouter.get('/cubicles', cubicleCtrl.getCubicles)

cubicleRouter.get('/cubicles/file', cubicleCtrl.createCubiclesFile)

cubicleRouter.get('/cubicles/download', cubicleCtrl.downloadCubiclesFile)

cubicleRouter.get('/cubicles/remove', cubicleCtrl.removeCubiclesFile)

cubicleRouter.get('/cubicles/:cubicle_id', cubicleCtrl.getCubicle)

cubicleRouter.post('/cubicles', created.isCreated, cubicleCtrl.createCubicle)

cubicleRouter.put('/cubicles/:cubicle_id', cubicleCtrl.updateCubicle)

cubicleRouter.delete('/cubicles/:cubicle_id', cubicleCtrl.removeCubicle)

cubicleRouter.delete('/cubicles', cubicleCtrl.removeCubicles)

module.exports = cubicleRouter
