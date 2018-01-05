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
import { DataReservationService } from '../../../services/dataReservation/data-reservation.service';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  reservations: ReservationModel[]
  cubicleReservationNumber: Number
  exist: Boolean
  currentReservation: UserDetailsModel

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

  getCurrentReservation(reservation) {
    this.openPopup()
    this.currentReservation = reservation.usersDetails
    this.dataReservationService.addReservationsDetails(this.currentReservation)
  }

  openPopup() {
    this.popup.open(PopupUserDetailsComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  delete(id: string) {
    this.reservationsService.remove(id).then(response => {
      console.log(response)
    }).catch(err => console.log(`Hubo un error ${err}`))
    this.exist = false
  }

}
