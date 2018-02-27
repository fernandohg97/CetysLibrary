import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { ReservationModel } from '../../models/reservation.model';
import { UsersService } from '../../services/users/users.service';
import { UserModel } from '../../models/user.model';
import { UserDetailsModel } from '../../models/userDetails.model';
import { NguiPopupComponent } from '@ngui/popup';
import { PopupUserDetailsComponent } from '../home-dialogs/popup-userDetails/popup-userDetails.component';
import { PopupUserInfoComponent } from '../home-dialogs/popup-user-info/popup-user-info.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { PopupEmployeeInfoComponent } from '../home-dialogs/popup-employee-info/popup-employee-info.component';
import { PopupExternalInfoComponent } from '../home-dialogs/popup-external-info/popup-external-info.component';
import { PopupBorrowedMaterialComponent } from '../home-dialogs/popup-borrowed-material/popup-borrowed-material.component';
import { PopupConfirmElementComponent } from '../home-dialogs/popup-confirm-element/popup-confirm-element.component';
import { AdminDataService } from '../../services/adminData/admin-data.service';
import { ElementType } from '../../enums/element-type.enum';

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
  @ViewChild(NguiPopupComponent) popup5: NguiPopupComponent;

  reservations: ReservationModel[]
  totalReservations: number
  searchByNumber: number
  page: number = 1
  currentReservation: UserDetailsModel
  currentPipe: string
  user: Boolean = false
  cubicle: Boolean = false
  date: Boolean = false
  startDate: string
  endDate: string
  searchReservationNumber: string
  searchReservationCubicle: string

  constructor(
    private adminDataService: AdminDataService,
    private dataReservationService: DataReservationService,
    private reservationsService: ReservationsService,
    private usersService: UsersService) {
  this.currentPipe = 'searchReservation' }

  ngOnInit() {
    this.reservationsService.getAll().then(data => {
      if (data) this.reservations = data
    })
    this.reservationsService.getCount().then(data => {
      this.totalReservations = parseInt(JSON.parse(JSON.stringify(data))._body)
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

  searchUser() {
    this.user = true
    this.cubicle = this.date = false
    this.startDate = ''
    this.endDate = ''
    this.searchReservationCubicle = ''
  }

  searchCubicle() {
    this.cubicle = true
    this.user = this.date = false
    this.searchReservationNumber = ''
    this.startDate = ''
    this.endDate = ''
  }

  searchDate() {
    this.date = true
    this.cubicle = this.user = false
    this.searchReservationNumber = ''
    this.searchReservationCubicle = ''
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

  deletePopup(id: string) {
    this.adminDataService.changeId(id)
    this.adminDataService.changeElement(ElementType.reservations)
    this.popup5.open(PopupConfirmElementComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }


}
