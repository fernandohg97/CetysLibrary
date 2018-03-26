import { Component, OnInit } from '@angular/core';
import { CubiclesService } from '../../services/cubicles/cubicles.service';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { CubicleModel } from '../../models/cubicle.model';
import { ReservationModel } from '../../models/reservation.model';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  cubicles: CubicleModel[]
  reservations: ReservationModel[]
  currentDate: Date = new Date()
  iconElement: string

  constructor(private cubiclesService: CubiclesService, private reservationsService: ReservationsService) {
    this.iconElement = 'fa fa-check-circle'
  }

  ngOnInit() { // Execute when component initialize
    this.cubiclesService.getAll() // Get all cubicles
    .then(data => {
      if (data) {
        this.cubicles = data
        this.reservationsService.getAll().then(data => { // Get all reservations
          if (data) {
            this.reservations = data
            this.reservations.forEach(reservation => {
              let initialDate = new Date(reservation.reservationDate)
              let finishTime = new Date(reservation.departureTime)
              if (this.currentDate >= initialDate && this.currentDate <= finishTime) { // In case currentDate is between initialDate and finishTime
                this.cubicles.forEach(cubicle => {
                  if (cubicle.cubicleNumber == reservation.cubicle) { // In case cubicleNumber is equal to reservation cubicle it will set availability to false
                    cubicle.availability = false
                  }
                })
              }
              else if (this.currentDate > finishTime) { // In case currentDate is bigger than finishTime
                if (reservation.enable) { // In case reservation enable it will set enable to false
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

  updateReservation(reservation) { // Update reservation to change enable property
    this.reservationsService.update(reservation._id, reservation).then(response => {
      if (response.status == 200 || response.status == 204) {
        response
      }
    }).catch(err => console.log(err))
  }

}
