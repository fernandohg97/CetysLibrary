import { Component, OnInit } from '@angular/core';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-popup-user-info',
  templateUrl: './popup-user-info.component.html',
  styleUrls: ['./popup-user-info.component.css']
})
export class PopupUserInfoComponent implements OnInit {

  currentUser: UserModel

  constructor(private dataReservationService: DataReservationService) { }

  ngOnInit() {
    this.currentUser = this.dataReservationService.getCurrentUser()
    console.log(this.currentUser)
  }

}
