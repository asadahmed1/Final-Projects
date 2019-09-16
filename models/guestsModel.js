const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
    roomId:{
        type:mongoose.Schema.ObjectId,
        ref:'roomSchema'
    },
    FirstName:{
        type:String,
        require: true
    },
     LastName: {
        type: String,
        require: true
    },
    Address: { 
        type: String, 
        require:true
     },
     ContactNo: { 
        type: String, 
        require:true
        
     },
     Gender: {
        type: String,
        require: true
    }, 
    Email:{
        type: String,
        require: true
    },
    
  
})

guestSchema.index({roomId:1,Email:1},{unique:true})



module.exports = mongoose.model('guestSchmea',guestSchema)