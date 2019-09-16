const express = require('express')
var routes = express.Router()
const guestsController = require('../controllers/guestsController')

routes.post('/guestRecord',guestsController.roomReservation)

module.exports = routes