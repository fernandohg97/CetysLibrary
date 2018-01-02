import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { CubiclesService } from '../../services/cubicles/cubicles.service';
import { CareersService } from '../../services/careers/careers.service';
import { DepartmentsService } from '../../services/departments/departments.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  totalUsers: number
  totalCubicles: number
  totalCareers: number
  totalDepartments: number

  constructor(
    private usersService: UsersService,
    private cubiclesService: CubiclesService,
    private careersService: CareersService,
    private departmentsService: DepartmentsService
  ) { }

  ngOnInit() {
    this.usersService.getAll().then(data => {
      console.log(data.length)
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
  }

}
