import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { CubiclesService } from '../../services/cubicles/cubicles.service';
import { CareersService } from '../../services/careers/careers.service';
import { DepartmentsService } from '../../services/departments/departments.service';
import { EmployeesService } from '../../services/employees/employees.service';
import { ExternalUserService } from '../../services/externalUser/external-user.service';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupConfirmComponent } from '../../home/home-dialogs/popup-confirm/popup-confirm.component';
import { AdminSection } from '../../enums/admin-section.enum';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  message: Boolean
  totalUsers: number
  totalCubicles: number
  totalCareers: number
  totalDepartments: number
  totalEmployees: number
  totalExternals: number

  constructor(
    private usersService: UsersService,
    private cubiclesService: CubiclesService,
    private careersService: CareersService,
    private departmentsService: DepartmentsService,
    private employeesService: EmployeesService,
    private externalUserService: ExternalUserService,
    private reservationsService: ReservationsService,
    private dataReservationService: DataReservationService
  ) { this.message = false }

  ngOnInit() {
    this.usersService.getCount().then(data => {
      this.totalUsers = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.cubiclesService.getCount().then(data => {
      this.totalCubicles = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.careersService.getCount().then(data => {
      this.totalCareers = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.departmentsService.getCount().then(data => {
      this.totalDepartments = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.employeesService.getCount().then(data => {
      this.totalEmployees = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.externalUserService.getCount().then(data => {
      this.totalExternals = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
  }

  openPopup() {
    this.dataReservationService.changeAdminSelected(AdminSection.reservations)
      this.popup.open(PopupConfirmComponent, {
        classNames: 'custom',
        closeButton: true
      })
    }
}
