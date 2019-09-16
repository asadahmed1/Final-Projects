const roomModel = require('../models/roomModel')

const roomReservation = (req,res, next) => {

    let roomReservaiton= new roomModel();
    roomReservaiton.roomno = req.body.roomno;
    roomReservaiton.roomtype = req.body.roomtype
    roomReservaiton.rate = req.body.rate
    roomReservaiton.arrivalDate = req.body.arrivalDate;
    roomReservaiton.departureDate = req.body.departureDate;
    roomReservaiton.occupancy = req.body.occupancy;
   


    roomReservaiton.save((err, result) => {

        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
            
            
        }
    })

}
//get all room reservation 
const allreservations=(req,res)=>{
    roomModel.find((err,result)=>{
        if(err){
          res.send(err)
        
        }
        else{
          res.status(200).json({
           
            result
          })
        }
      })
    }
// Delete record 

  const removereservation=(req,res)=>{
    roomModel.findByIdAndRemove(req.body._id,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.status(200).json({
          message:"data removed succefully",
          result
        })
      }
    })
  }

  // Update User 
    //update reservations
    const updatereservation=(req,res)=>{
      roomModel.findByIdAndUpdate(req.body.id,req.body.reserve,{new:true},(err,result)=>{
        if(err){
          res.send(err)
        }else{
          res.status(200).json({
            message:"data updated succefully",
            result
          })
        }
      })
    }

// Exporting Modules

module.exports={
    roomReservation,
    allreservations,
    removereservation,
    updatereservation

}