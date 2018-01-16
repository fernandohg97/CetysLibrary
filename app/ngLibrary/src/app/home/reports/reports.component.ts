import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { ReservationModel } from '../../models/reservation.model';
import { UsersService } from '../../services/users/users.service';
import { UserModel } from '../../models/user.model';
import { UserDetailsModel } from '../../models/userDetails.model';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupUserDetailsComponent } from '../popup-userDetails/popup-userDetails.component';
import { PopupUserInfoComponent } from '../popup-user-info/popup-user-info.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { PopupEmployeeInfoComponent } from '../popup-employee-info/popup-employee-info.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup2: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup3: NguiPopupComponent;
  reservations: ReservationModel[]
  searchByNumber: number
  page: number = 1
  currentReservation: UserDetailsModel

  constructor(private dataReservationService: DataReservationService, private reservationsService: ReservationsService, private usersService: UsersService) { }

  ngOnInit() {
    this.reservationsService.getAll().then(data => {
      if (data) {
        this.reservations = data
        console.log(this.reservations)
        console.log(this.reservations[0].reservationDate)
      }
    })
  }

  getCurrentReservation(reservation) {
    this.currentReservation = reservation.usersDetails
    this.dataReservationService.addReservationsDetails(this.currentReservation)
    this.openPopup()
  }

  getCurrentUser(user) {
    if (user.registrationNumber) {
      this.openPopup2()
      this.dataReservationService.changeUser(user)
    } else {
      this.openPopup3()
      this.dataReservationService.changeEmployee(user)
    }
  }

  openPopup2() {
    this.popup2.open(PopupUserInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  openPopup3() {
    this.popup2.open(PopupEmployeeInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  openPopup() {
    this.popup.open(PopupUserDetailsComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

}
