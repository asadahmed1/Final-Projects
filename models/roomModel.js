const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    roomno:{
        type:String,
        require: true
    },
     roomtype: {
        type: String,
        require: true
    },
    arrivalDate: { 
        type: String, 
        require:true
     },
     departureDate: { 
        type: String, 
        require:true
        
     },
     occupancy: {
        type: String,
        require: true
    }, 
    rate:{
        type: String,
        require: true
    },
    
  
})



module.exports = mongoose.model('roomSchema',roomSchema)