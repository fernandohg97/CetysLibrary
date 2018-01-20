import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentsService } from '../../services/departments/departments.service';
import { DepartmentModel } from '../../models/department.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-departments',
  templateUrl: './admin-departments.component.html',
  styleUrls: ['./admin-departments.component.css']
})
export class AdminDepartmentsComponent implements OnInit {

  newDepartment = new DepartmentModel()
  departments: DepartmentModel[]
  called: Boolean
  textFile: any
  nameFile: string
  page: number = 1
  @ViewChild('inputFile') myInputVariable: any;
  anyErrors: any
  errorFile: string
  errorItem: string

  constructor(private departmentsService: DepartmentsService, private router: Router) {
    this.called = false
  }

  ngOnInit() {
    this.departmentsService.getAll().then(data => {
      this.departments = data
    })
  }

  createDepartment() {
    this.called = true
  }

  removeFile() {
    this.myInputVariable.nativeElement.value = "";
    this.nameFile = ''
    this.textFile = undefined
  }

  fileChange(event) {
    let input = event.target;
    this.nameFile = input.files[0].name

    for (var index = 0; index < input.files.length; index++) {
        let reader = new FileReader();
        reader.onload = () => {
            // this 'text' is the content of the file
            this.textFile = reader.result;
        }
        reader.readAsText(input.files[index]);
    };
  }

  save() {
    if (this.textFile) {
      let jsonFiles = JSON.parse(this.textFile)
      this.departmentsService.createFile(jsonFiles)
      .subscribe((response => {
        this.router.navigateByUrl('/admin-site')
      }), (err => this.errorFile = JSON.parse(err._body).existDepartments)
      )
    } else {
      this.departmentsService.create(this.newDepartment)
      .subscribe((response => {
        this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.anyErrors = JSON.parse(err._body)
        this.errorItem = JSON.parse(err._body).existDepartment
      })
      )
    }
  }

  delete(id: string) {
    this.departmentsService.remove(id).then(response => {
      response
    }).catch(err => console.log(`Hubo un error ${err}`))
  }
}
