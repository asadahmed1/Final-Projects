import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
// import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {RoomreservationService} from '../../services/roomreservation.service'
import {roomReservation} from './roomReservation'
   
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [RoomreservationService]
})
export class DashboardComponent implements OnInit {
 
  public reservation: roomReservation[];
  public _id: string;
  public froomno: string;
  public froomtype: string;
  public farrivalDate: string;
  public fdepartureDate: string;
  public foccupancy: string;
  public frate: string;
    //dropdown values of roomtype

    public rooms = ["Single Person", "Two Person", "Family"];



    public reservationForm: FormGroup;

  constructor(private roomreservation:RoomreservationService ) {
     this.reservationForm = this.createFormGroup();
   }
  
   createFormGroup() {
    return new FormGroup({
      //name validation
      roomno: new FormControl("", [Validators.required]),
      //room type
      roomtype: new FormControl("", [Validators.required]),
      //arrival date dateValidator defined in validators folder
      arrivalDate: new FormControl("", [Validators.required]),
      //departure date dateValidator defined in validators folder
      departureDate: new FormControl("", [Validators.required]),
      //flight No
      occupancy: new FormControl("", [Validators.required]),
      // Request validation
      rate: new FormControl("", [Validators.required]),
     
    });
  }

  // Getting Values
  get roomno() {
    return this.reservationForm.get("roomno");
  }
 
  get roomtype() {
    return this.reservationForm.get("roomtype");
  }
  get departureDate() {
    return this.reservationForm.get("departureDate");
  }
 
  get rate() {
    return this.reservationForm.get("rate");
  }
  get occupancy() {
    return this.reservationForm.get("occupancy");
  }

  get arrivalDate() {
    return this.reservationForm.get("arrivalDate");
  }

  // add new room reservation
  addReservation() {
   

   this.roomreservation.roomReservation(this.reservationForm.value).subscribe((reser => {
      (this.reservation.push(reser))
      console.log(reser)
    }))
  }

  // Delete Record

  onDelete(id:any){
    let DeleteRoomRecords  = {
      body:{
        _id:id
      }
    }
    this.roomreservation.deleteReservation(DeleteRoomRecords).subscribe(result=>{
      this.reservation.splice(id,1);
    })

    }
  // Edit
  onEdit(index){

 
    this.reservationForm.get('roomno').setValue(this.reservation[index].roomno);
   
    this.reservationForm.get('roomtype').setValue(this.reservation[index].roomtype);
    this.reservationForm.get('arrivalDate').setValue(this.reservation[index].arrivalDate);
    this.reservationForm.get('departureDate').setValue(this.reservation[index].departureDate);
    this.reservationForm.get('occupancy').setValue(this.reservation[index].occupancy);
    this.reservationForm.get('rate').setValue(this.reservation[index].rate);
  

  }

  // Update Record
  update(id:any){
    const newReservation = {
    id: id,
    reserve:
     this.reservationForm.value
    
    
}
console.log(newReservation)

    this.roomreservation.updateReservation(newReservation)
.subscribe (reser => {
  
  this.reservation.push(reser)

})
}


  ngOnInit() {
    // Show all records
    this.roomreservation.getAll().subscribe(reservation => {
      this.reservation = reservation.result;
    });
  
  }

}
