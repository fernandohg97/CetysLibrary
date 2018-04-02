module.exports = {
  port: process.env.PORT || 8482, // database port
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/reservationsCetys' // Database to connect
}
