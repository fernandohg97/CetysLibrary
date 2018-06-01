import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReservationsService } from '../../../services/reservations/reservations.service';
import { ReservationModel } from '../../../models/reservation.model';
import { CubicleModel } from '../../../models/cubicle.model';
import { CubiclesService } from '../../../services/cubicles/cubicles.service';
import { UserDetailsModel } from '../../../models/userDetails.model';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupUserDetailsComponent } from '../../home-dialogs/popup-userDetails/popup-userDetails.component';
import { PopupUserInfoComponent } from '../../home-dialogs/popup-user-info/popup-user-info.component';
import { PopupEmployeeInfoComponent } from '../../home-dialogs/popup-employee-info/popup-employee-info.component';
import { PopupExternalInfoComponent } from '../../home-dialogs/popup-external-info/popup-external-info.component';
import { DataReservationService } from '../../../services/dataReservation/data-reservation.service';
import { PopupBorrowedMaterialComponent } from '../../home-dialogs/popup-borrowed-material/popup-borrowed-material.component';
import { PopupConfirmElementComponent } from '../../home-dialogs/popup-confirm-element/popup-confirm-element.component';
import { AdminDataService } from '../../../services/adminData/admin-data.service';
import { ElementType } from '../../../enums/element-type.enum';

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
  @ViewChild(NguiPopupComponent) popup5: NguiPopupComponent;
  reservations: ReservationModel[]
  cubicleReservationNumber: Number
  exist: Boolean

  constructor(
    private adminDataService: AdminDataService,
    private dataReservationService: DataReservationService,
    private cubiclesService: CubiclesService,
    private reservationsService: ReservationsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  // Execute when component initialize
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
 // Depending of user type get user info
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
  // Get user details reservation when companions is clic
  getCurrentReservation(reservation) {
    this.dataReservationService.addReservationsDetails(reservation.usersDetails)
    this.openPopup()
  }
  // Get material description
  getBorrowedMaterial(material) {
    this.dataReservationService.changeBorrowedMaterial(material)
    this.popup.open(PopupBorrowedMaterialComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }
  // Popup for user details component
  openPopup() {
    this.popup.open(PopupUserDetailsComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }
  // Pop up user (student) info component
  openPopup2() {
    this.popup2.open(PopupUserInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }
  // Pop up employee info component
  openPopup3() {
    this.popup3.open(PopupEmployeeInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }
  // Pop up external user info
  openPopup4() {
    this.popup4.open(PopupExternalInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }
  // Pop up confirm delete element component
  openPopup5(id: string) {
    this.adminDataService.changeReservationId(id)
    this.adminDataService.changeId(id)
    this.adminDataService.changeElement(ElementType.reservations)
    this.popup5.open(PopupConfirmElementComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

}
