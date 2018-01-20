import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from '../../services/employees/employees.service';
import { EmployeeModel } from '../../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.css']
})
export class AdminEmployeesComponent implements OnInit {

  newEmployee = new EmployeeModel()
  employees: EmployeeModel[]
  called: Boolean
  textFile: any
  nameFile: string
  page: number = 1
  @ViewChild('inputFile') myInputVariable: any;
  anyErrors: any
  errorFile: string
  errorItem: string

  constructor(private employeesService: EmployeesService, private router: Router) {
    this.called = false
  }

  ngOnInit() {
    this.employeesService.getAll().then(data => {
      this.employees = data
    })
  }

  createEmployee() {
    this.called = true
  }

  removeFile() {
    console.log(this.myInputVariable.nativeElement.files);
    this.myInputVariable.nativeElement.value = "";
    console.log(this.myInputVariable.nativeElement.files);
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
      console.log(this.textFile)
      let jsonFiles = JSON.parse(this.textFile)
      this.employeesService.createFile(jsonFiles)
      .subscribe((response => {
        console.log(response)
        this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.errorFile = JSON.parse(err._body).existEmployees
      })
      )
    } else {
      this.employeesService.create(this.newEmployee)
      .subscribe((response => {
        console.log(response)
        this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.anyErrors = JSON.parse(err._body)
        this.errorItem = JSON.parse(err._body).existEmployee
      })
      )
    }
  }

  delete(id: string) {
    this.employeesService.remove(id).then(response => {
      console.log(response)
    }).catch(err => console.log(`Hubo un error ${err}`))
  }

}
