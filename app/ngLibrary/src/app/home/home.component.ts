import { Component, OnInit } from '@angular/core';
import { CubiclesService } from '../services/cubicles/cubicles.service';
import { ReservationsService } from '../services/reservations/reservations.service';
import { CubicleModel } from '../models/cubicle.model';
import { ReservationModel } from '../models/reservation.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cubicles: CubicleModel[]
  reservations: ReservationModel[]
  currentDate: Date = new Date()
  iconElement: string

  constructor(private cubiclesService: CubiclesService, private reservationsService: ReservationsService) {
    this.iconElement = 'fa fa-check-circle'
  }

  ngOnInit() {
    this.cubiclesService.getAll()
    .then(data => {
      if (data) {
        this.cubicles = data
        console.log('Cubiculos:')
        console.log(data)
        this.reservationsService.getAll().then(data => {
          if (data) {
            this.reservations = data
            this.reservations.forEach(reservation => {
              let initialDate = new Date(reservation.reservationDate)
              let finishTime = new Date(reservation.departureTime)
              if (this.currentDate >= initialDate && this.currentDate <= finishTime) {
                this.cubicles.forEach(cubicle => {
                  if (cubicle.cubicleNumber == reservation.cubicle) {
                    cubicle.availability = false
                  }
                })
              }
              else if (this.currentDate > finishTime) {
                if (reservation.enable) {
                  reservation.enable = false
                  this.updateReservation(reservation)
                }
              }
            })
        }
        })
      }
    })
  }

  updateReservation(reservation) {
    this.reservationsService.update(reservation._id, reservation).then(response => {
      if (response.status == 200 || response.status == 204) {
        console.log(response)
      }
    })
  }

}
