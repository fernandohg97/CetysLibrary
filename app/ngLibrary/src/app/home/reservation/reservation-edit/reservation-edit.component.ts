import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReservationsService } from '../../../services/reservations/reservations.service';
import { ReservationModel } from '../../../models/reservation.model';
import { CubicleModel } from '../../../models/cubicle.model';
import { CubiclesService } from '../../../services/cubicles/cubicles.service';
import { UserDetailsModel } from '../../../models/userDetails.model';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupUserDetailsComponent } from '../../popup-userDetails/popup-userDetails.component';
import { PopupUserInfoComponent } from '../../popup-user-info/popup-user-info.component';
import { PopupEmployeeInfoComponent } from '../../popup-employee-info/popup-employee-info.component';
import { PopupExternalInfoComponent } from '../../popup-external-info/popup-external-info.component';
import { DataReservationService } from '../../../services/dataReservation/data-reservation.service';
import { PopupBorrowedMaterialComponent } from '../../popup-borrowed-material/popup-borrowed-material.component';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup2: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup3: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup4: NguiPopupComponent;
  reservations: ReservationModel[]
  cubicleReservationNumber: Number
  exist: Boolean

  constructor(
    private dataReservationService: DataReservationService,
    private cubiclesService: CubiclesService,
    private reservationsService: ReservationsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let cubicleNumberId = params['id'] //
      if (cubicleNumberId) {
        this.cubiclesService.getById(cubicleNumberId).then(cubicle => {
          this.cubicleReservationNumber = cubicle.cubicleNumber
          this.reservationsService.getByCubicle(this.cubicleReservationNumber.toString()).then(data => {
            data.length == 0 ? this.exist = false : this.exist = true
            this.reservations = data
          })
        })
      }
    })
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

  getCurrentReservation(reservation) {
    this.dataReservationService.addReservationsDetails(reservation.usersDetails)
    this.openPopup()
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
      response
    }).catch(err => console.log(`Hubo un error ${err}`))
    this.exist = false
  }

}
