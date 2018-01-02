import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { ReservationModel } from '../../models/reservation.model';
import { UsersService } from '../../services/users/users.service';
import { UserModel } from '../../models/user.model';
import { UserDetailsModel } from '../../models/userDetails.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reservations: ReservationModel[]
  searchByNumber: number
  page: number = 1
  currentReservation: UserDetailsModel

  constructor(private reservationsService: ReservationsService, private usersService: UsersService) { }

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
    console.log(reservation.usersDetails)
    this.currentReservation = reservation.usersDetails
  }

}
