const guestModel = require('../models/guestsModel')

const roomReservation = (req,res, next) => {

    let newGuest= new guestModel();
    newGuest.FirstName = req.body.FirstName;
    newGuest.LastName = req.body.LastName
    newGuest.Address = req.body.Address
    newGuest.ContactNo = req.body.ContactNo;
    newGuest.Gender = req.body.Gender;
    newGuest.Email = req.body.Email;
   


    newGuest.save((err, result) => {

        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
            
            
        }
    })

}