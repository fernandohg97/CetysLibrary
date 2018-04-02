import { Component, OnInit} from '@angular/core';
import { DataReservationService } from '../../../services/dataReservation/data-reservation.service';
import { UsersQuantityService } from '../../../services/usersQuantity/users.quantity.service';
import { UserDepartmentModel } from '../../../models/userDetails.model';
import { UserDetailsModel } from '../../../models/userDetails.model';

@Component({
  selector: 'app-popup-userDetails',
  templateUrl: './popup-userDetails.component.html',
  styleUrls: ['./popup-userDetails.component.css']
})
export class PopupUserDetailsComponent implements OnInit {

  currentReservation: UserDetailsModel

  constructor(
    private usersQuantityService: UsersQuantityService,
    private dataReservationService: DataReservationService
  ) { }
  // Execute when component initialize
  ngOnInit() {
    this.currentReservation = this.dataReservationService.getCurrentReservations() // get selected reservation
  }

}
