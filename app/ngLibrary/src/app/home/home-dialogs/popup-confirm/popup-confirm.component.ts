import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../../services/reservations/reservations.service';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.css']
})
export class PopupConfirmComponent implements OnInit {

  constructor(private reservationsService: ReservationsService) { }

  ngOnInit() {  }

  removeAll() {
    this.reservationsService.removeAll().then(response => {
    console.log(response)
    }).catch(err => console.log(err))
  }

}
