import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

<<<<<<< HEAD
  constructor(private cubiclesService: CubiclesService, private reservationsService: ReservationsService) {
    this.iconElement = 'fa fa-check-circle'
  }

  ngOnInit() {
    this.cubiclesService.getAll()
    .then(data => {
      if (data) {
        this.cubicles = data
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
        response
      }
    })
  }
=======
  ngOnInit() {}

>>>>>>> 6f88e15179c21d33d57156d21c165567ead3cd70
}
