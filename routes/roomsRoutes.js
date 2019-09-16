const express = require('express')
var routes = express.Router()
const roomController = require('../controllers/roomController')

// Room allotment 
routes.post('/roomsave',roomController.roomReservation)
//get all reservation data
routes.get('/allreservation',roomController.allreservations)

// Delete Record

routes.delete('/deleteReservation',roomController.removereservation)
// update record
routes.put('/update',roomController.updatereservation)


module.exports =routes
