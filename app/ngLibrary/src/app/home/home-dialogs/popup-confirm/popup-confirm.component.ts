import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservationsService } from '../../../services/reservations/reservations.service';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.css']
})
export class PopupConfirmComponent implements OnInit {
  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;

  constructor(private reservationsService: ReservationsService) { }

  ngOnInit() {  }

  removeAll() {
    this.reservationsService.removeAll().then(response => {
    console.log(response)
    }).catch(err => console.log(err))
  }

}
