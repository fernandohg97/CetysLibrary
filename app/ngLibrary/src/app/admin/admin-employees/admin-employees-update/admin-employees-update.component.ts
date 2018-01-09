import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/employees/employees.service';
import { EmployeeModel } from '../../../models/employee.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-employees-update',
  templateUrl: './admin-employees-update.component.html',
  styleUrls: ['./admin-employees-update.component.css']
})
export class AdminEmployeesUpdateComponent implements OnInit {

  currentEmployee: EmployeeModel

  constructor(private employeesService: EmployeesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let employeeId = params['id'] //
      console.log(`Id del departamento: ${employeeId}`)
      if (employeeId) {
        this.employeesService.getById(employeeId).then(employee => {
          console.log(employee)
          this.currentEmployee = employee
        })
      }
    })
  }

  isActiveCareer(event: any) {
    console.log(event.target.value)
    this.currentEmployee.active = event.target.value
  }

  isNotActiveCareer(event: any) {
    console.log(event.target.value)
    this.currentEmployee.active = event.target.value
  }

  update() {
    this.employeesService.update(this.currentEmployee._id, this.currentEmployee).then(response => {
      console.log(response)
      if (response.status == 200 || response.status == 204) {
        this.router.navigateByUrl('/admin-site')
      }
    }).catch(err => console.log(`Error ${err}`))
  }

}