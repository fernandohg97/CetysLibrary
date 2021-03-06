import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { DepartmentModel } from '../../../models/department.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-departments-update',
  templateUrl: './admin-departments-update.component.html',
  styleUrls: ['./admin-departments-update.component.css']
})
export class AdminDepartmentsUpdateComponent implements OnInit {

  currentDepartment: DepartmentModel

  constructor(private departmentsService: DepartmentsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let departmentId = params['id'] //
      if (departmentId) {
        this.departmentsService.getById(departmentId).then(department => {
          this.currentDepartment = department
        })
      }
    })
  }

  update() {
    this.departmentsService.update(this.currentDepartment._id, this.currentDepartment).then(response => {
        setTimeout(() => {
          alert(`Departamento actualizado exitosamente`)
        }, 500)
        this.router.navigateByUrl('/admin-site')
    }).catch(err => console.log(`Error ${err}`))
  }

}
