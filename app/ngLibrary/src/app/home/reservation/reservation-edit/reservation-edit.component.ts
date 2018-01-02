import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReservationsService } from '../../../services/reservations/reservations.service';
import { ReservationModel } from '../../../models/reservation.model';
import { CubicleModel } from '../../../models/cubicle.model';
import { CubiclesService } from '../../../services/cubicles/cubicles.service';
import { UserDetailsModel } from '../../../models/userDetails.model';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {

  reservations: ReservationModel[]
  cubicleReservationNumber: Number
  exist: Boolean
  currentReservation: UserDetailsModel

  constructor(private cubiclesService: CubiclesService, private reservationsService: ReservationsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let cubicleNumberId = params['id'] //
      // console.log(`Id de cubiculo: ${cubicleNumberId}`)
      if (cubicleNumberId) {
        this.cubiclesService.getById(cubicleNumberId).then(cubicle => {
          this.cubicleReservationNumber = cubicle.cubicleNumber
          this.reservationsService.getByCubicle(this.cubicleReservationNumber.toString()).then(data => {
            data.length == 0 ? this.exist = false : this.exist = true
            this.reservations = data
            // console.log('reservations', data)
          })
          // console.log(this.cubicleReservationNumber)
        })

      }
    })
  }

  getCurrentReservation(reservation) {
    // console.log(reservation.usersDetails)
    this.currentReservation = reservation.usersDetails
  }

  delete(id: string) {
    this.reservationsService.remove(id).then(response => {
      // console.log(response)
    }).catch(err => `Hubo un error ${err}`)
    this.exist = false
  }

}
