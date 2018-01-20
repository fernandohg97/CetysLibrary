import { Component, OnInit } from '@angular/core';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-popup-employee-info',
  templateUrl: './popup-employee-info.component.html',
  styleUrls: ['./popup-employee-info.component.css']
})
export class PopupEmployeeInfoComponent implements OnInit {

  currentEmployee: EmployeeModel

  constructor(private dataReservationService: DataReservationService) { }

  ngOnInit() {
    this.currentEmployee = this.dataReservationService.getCurrentEmployee()
  }

}
