import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { CubiclesService } from '../../services/cubicles/cubicles.service';
import { CareersService } from '../../services/careers/careers.service';
import { DepartmentsService } from '../../services/departments/departments.service';
import { EmployeesService } from '../../services/employees/employees.service';
import { ExternalUserService } from '../../services/externalUser/external-user.service';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupConfirmComponent } from '../../home/home-dialogs/popup-confirm/popup-confirm.component';

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
    private reservationsService: ReservationsService
  ) { this.message = false }

  ngOnInit() {
    this.usersService.getAll().then(data => {
      this.totalUsers = data.length
    })
    this.cubiclesService.getAll().then(data => {
      this.totalCubicles = data.length
    })
    this.careersService.getAll().then(data => {
      this.totalCareers = data.length
    })
    this.departmentsService.getAll().then(data => {
      this.totalDepartments = data.length
    })
    this.employeesService.getAll().then(data => {
      this.totalEmployees = data.length
    })
    this.externalUserService.getAll().then(data => {
      this.totalExternals = data.length
    })
  }

  openPopup() {
      this.popup.open(PopupConfirmComponent, {
        classNames: 'custom'
        // closeButton: true
      })
    }

  removeAll() {
    this.openPopup()
    if (this.message) {
      this.reservationsService.removeAll().then(response => {
      console.log(response)
      }).catch(err => console.log(err))
    }
  }
}
