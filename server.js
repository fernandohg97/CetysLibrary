'use strict'

const app = require('./app/app')
const mongoose = require('mongoose')
const config = require('./app/app.config')

mongoose.connect(config.db, (err, res) => {
  if (err) {
    console.log(`Error al conectar a la base de datos: ${err}`)
  } else {
    console.log(`Conexion a la base de datos exitosa`)
  }
})

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`)
})
