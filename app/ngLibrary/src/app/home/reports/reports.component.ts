import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { ReservationModel } from '../../models/reservation.model';
import { UsersService } from '../../services/users/users.service';
import { UserModel } from '../../models/user.model';
import { UserDetailsModel } from '../../models/userDetails.model';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupUserDetailsComponent } from '../home-dialogs/popup-userDetails/popup-userDetails.component';
import { PopupUserInfoComponent } from '../home-dialogs/popup-user-info/popup-user-info.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { PopupEmployeeInfoComponent } from '../home-dialogs/popup-employee-info/popup-employee-info.component';
import { PopupExternalInfoComponent } from '../home-dialogs/popup-external-info/popup-external-info.component';
import { PopupBorrowedMaterialComponent } from '../home-dialogs/popup-borrowed-material/popup-borrowed-material.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup2: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup3: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup4: NguiPopupComponent;

  reservations: ReservationModel[]
  searchByNumber: number
  page: number = 1
  currentReservation: UserDetailsModel
  currentPipe: string

  constructor(private dataReservationService: DataReservationService, private reservationsService: ReservationsService, private usersService: UsersService) {
  this.currentPipe = 'searchReservation' }

  ngOnInit() {
    this.reservationsService.getAll().then(data => {
      if (data) {
        this.reservations = data
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
    } else if (user.employeeNumber) {
      this.openPopup3()
      this.dataReservationService.changeEmployee(user)
    } else {
      this.openPopup4()
      this.dataReservationService.changeExternalUser(user)
    }
  }

  getBorrowedMaterial(material) {
    this.dataReservationService.changeBorrowedMaterial(material)
    this.popup.open(PopupBorrowedMaterialComponent, {
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

  openPopup2() {
    this.popup2.open(PopupUserInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  openPopup3() {
    this.popup3.open(PopupEmployeeInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  openPopup4() {
    this.popup4.open(PopupExternalInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  delete(id: string) {
    this.reservationsService.remove(id).then(response => {
      if (response.status == 200 || response.status == 204) {
          setTimeout(() => {alert('Reservacion eliminada exitosamente')}, 600)
      }
    }).catch(err => {
      alert(`Hubo un error al eliminar la reservacion`)
      console.log(`Hay un error ${err}`)
    })
  }

}
