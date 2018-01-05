import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { UsersQuantityService } from '../../services/usersQuantity/users.quantity.service';
import { UserDepartmentModel } from '../../models/userDetails.model';
import { UserDetailsModel } from '../../models/userDetails.model';

@Component({
  selector: 'app-popup-userDetails',
  templateUrl: './popup-userDetails.component.html',
  styleUrls: ['./popup-userDetails.component.css']
})
export class PopupUserDetailsComponent implements OnInit, OnDestroy {

  registrationNumber: number
  quantityDepartment: number = 1
  totalQuantityUsers: number
  @Input() buttonReady: Boolean
  currentReservation: UserDetailsModel


  constructor(
    private usersQuantityService: UsersQuantityService,
    private dataReservationService: DataReservationService
  ) { }

  ngOnInit() {
    this.currentReservation = this.dataReservationService.getCurrentReservations()
  }



  ngOnDestroy() {

  }



  // onSubmitQuantityDepartment() {
  //   // console.log(this.quantityDepartment)
  //   let newDepartmentUser = new UserDepartmentModel(this.quantityDepartment, this.usersQuantityService.getDepartmentSelected(), this.registrationNumber)
  //   this.newReservationDetails.usersDetails.push(newDepartmentUser)
  //   this.newReservationDetails.peopleQuantity += this.quantityDepartment
  //   console.log(this.newReservationDetails.usersDetails)
  //   this.quantityDepartment = 1
  // }

}
