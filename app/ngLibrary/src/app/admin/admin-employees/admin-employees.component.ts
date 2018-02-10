import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { EmployeesService } from '../../services/employees/employees.service';
import { EmployeeModel } from '../../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupConfirmComponent } from '../../home/home-dialogs/popup-confirm/popup-confirm.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { AdminSection } from '../../enums/admin-section.enum';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.css']
})
export class AdminEmployeesComponent implements OnInit, OnDestroy {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
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

  constructor(private dataReservationService: DataReservationService, private employeesService: EmployeesService, private router: Router) {
    this.called = false
  }

  ngOnInit() {
    this.employeesService.getAll().then(data => {
      this.employees = data
    })
    this.employeesService.createEmployeesDownloadFile()
  }

  ngOnDestroy() {
    this.employeesService.removeEmployeesFile()
  }

  createEmployee() {
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

  openPopup() {
    this.dataReservationService.changeAdminSelected(AdminSection.employees)
      this.popup.open(PopupConfirmComponent, {
        classNames: 'custom',
        closeButton: true
      })
    }

    downloadFile() {
      this.employeesService.getDownloadFile().then(res => {
        window.open(res.url)
      }).catch(err => {
        alert('Hubo un error al descargar el archivo')
      })
    }

  save() {
    if (this.textFile) {
      let jsonFiles = JSON.parse(this.textFile)
      this.employeesService.createFile(jsonFiles)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Empleados creados exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.errorFile = JSON.parse(err._body).existEmployees
      })
      )
    } else {
      this.employeesService.create(this.newEmployee)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Empleado creado exitosamente`)
          }, 500)
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
      response
    }).catch(err => console.log(`Hubo un error ${err}`))
  }

}
