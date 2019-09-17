const express = require('express')
var routes = express.Router()
const guestsController = require('../controllers/guestsController')

routes.post('http//localhost:8080/api/guestRecord',guestsController.roomReservation)

module.exports = routes