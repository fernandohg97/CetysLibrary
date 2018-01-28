import { Component, OnInit } from '@angular/core';
import { DataReservationService } from '../../../services/dataReservation/data-reservation.service';
import { ReservationModel } from '../../../models/reservation.model';

@Component({
  selector: 'app-popup-borrowed-material',
  templateUrl: './popup-borrowed-material.component.html',
  styleUrls: ['./popup-borrowed-material.component.css']
})
export class PopupBorrowedMaterialComponent implements OnInit {

  currentMaterial: String

  constructor(private dataReservationService: DataReservationService) { }

  ngOnInit() {
    this.currentMaterial = this.dataReservationService.getCurrentBorrowedMaterial()
  }

}
