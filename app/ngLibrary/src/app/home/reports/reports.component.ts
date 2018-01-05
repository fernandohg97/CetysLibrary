import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { ReservationModel } from '../../models/reservation.model';
import { UsersService } from '../../services/users/users.service';
import { UserModel } from '../../models/user.model';
import { UserDetailsModel } from '../../models/userDetails.model';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupUserDetailsComponent } from '../popup-userDetails/popup-userDetails.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  @ViewChild(NguiPopupComponent) popup2: NguiPopupComponent;
  reservations: ReservationModel[]
  searchByNumber: number
  page: number = 1
  currentReservation: UserDetailsModel
  searchReservationNumber: number

  constructor(private dataReservationService: DataReservationService, private reservationsService: ReservationsService, private usersService: UsersService) { }

  ngOnInit() {
    this.reservationsService.getAll().then(data => {
      if (data) {
        this.reservations = data
        // console.log(this.reservations)
        // console.log(this.reservations[0].reservationDate)
      }
    })
  }

  getCurrentReservation(reservation) {
    console.log(reservation.usersDetails)
    this.openPopup()
    this.currentReservation = reservation.usersDetails
    this.dataReservationService.addReservationsDetails(this.currentReservation)
  }

  openPopup() {
    this.popup2.open(PopupUserDetailsComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

}
