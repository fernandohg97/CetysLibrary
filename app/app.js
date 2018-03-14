'use strict'

const express = require('express') // Import express library
const app = express()
const path = require('path') // Import path library
const bodyParser = require('body-parser') // Import bodyParser library to get data from request
const userRouter = require('./routes/user.route')
const reservationRouter = require('./routes/reservation.route')
const cubicleRouter = require('./routes/cubicle.route')
const careerRouter = require('./routes/career.route')
const departmentRouter = require('./routes/department.route')
const employeeRouter = require('./routes/employee.route')
const reportsRouter = require('./routes/reports.route')
const externalUserRouter = require('./routes/externalUser.route')

// Body parser let us get the form data with req.body
// Limit size post data with body-parser
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))

// Allow control headers
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Methods', 'DELETE,GET,PUT,POST')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(express.static(`${__dirname}/ngLibrary/dist`))
app.set('view-engine', 'html')

// Used api's to call to database for specific router
app.use('/api', userRouter)
app.use('/api', reservationRouter)
app.use('/api', cubicleRouter)
app.use('/api', careerRouter)
app.use('/api', departmentRouter)
app.use('/api', employeeRouter)
app.use('/api', reportsRouter)
app.use('/api', externalUserRouter)

// Redirect to index.html automatically
app.all('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/ngLibrary/dist/index.html'))
})

module.exports = app
