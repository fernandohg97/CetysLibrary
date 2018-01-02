'use strict'

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const userRouter = require('./app/routes/user.route')
const reservationRouter = require('./app/routes/reservation.route')
const cubicleRouter = require('./app/routes/cubicle.route')
const careerRouter = require('./app/routes/career.route')
const departmentRouter = require('./app/routes/department.route')
const employeeRouter = require('./app/routes/employee.route')
const reportsRouter = require('./app/routes/reports.route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Methods', 'DELETE,GET,PUT,POST')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(express.static(`${__dirname}/ngLibrary/dist`))
app.set('view-engine', 'html')

app.all('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/ngLibrary/dist/index.html'))
})

app.use('/api', userRouter)
app.use('/api', reservationRouter)
app.use('/api', cubicleRouter)
app.use('/api', careerRouter)
app.use('/api', departmentRouter)
app.use('/api', employeeRouter)
app.use('/api', reportsRouter)

module.exports = app
