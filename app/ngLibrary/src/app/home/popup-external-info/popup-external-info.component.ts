import { Component, OnInit } from '@angular/core';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { ExternalUserModel } from '../../models/externalUser.model';

@Component({
  selector: 'app-popup-external-info',
  templateUrl: './popup-external-info.component.html',
  styleUrls: ['./popup-external-info.component.css']
})
export class PopupExternalInfoComponent implements OnInit {

  currentExternalUser: ExternalUserModel

  constructor(private dataReservationService: DataReservationService) { }

  ngOnInit() {
    this.currentExternalUser = this.dataReservationService.getCurrentExternalUser()
    console.log(this.currentExternalUser)
  }

}
