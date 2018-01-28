import { Component, OnInit } from '@angular/core';
import { DataReservationService } from '../../../services/dataReservation/data-reservation.service';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.css']
})
export class PopupConfirmComponent implements OnInit {

  messageConfirmation: Boolean

  constructor(private dataReservationService: DataReservationService) { }

  ngOnInit() {
    this.messageConfirmation = this.dataReservationService.getCurrentConfirmationMessage()
  }

}
