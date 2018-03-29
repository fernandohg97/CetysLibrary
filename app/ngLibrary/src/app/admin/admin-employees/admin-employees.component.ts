import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { EmployeesService } from '../../services/employees/employees.service';
import { EmployeeModel } from '../../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupConfirmComponent } from '../../home/home-dialogs/popup-confirm/popup-confirm.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { AdminSection } from '../../enums/admin-section.enum';
import { ElementType } from '../../enums/element-type.enum';
import { AdminDataService } from '../../services/adminData/admin-data.service';
import { PopupConfirmElementComponent } from '../../home/home-dialogs/popup-confirm-element/popup-confirm-element.component';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.css']
})
export class AdminEmployeesComponent implements OnInit, OnDestroy {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup2: NguiPopupComponent;
  @ViewChild('employeeTable') employeeTable: ElementRef;
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
  totalEmployees: number

  constructor(private adminDataService: AdminDataService, private dataReservationService: DataReservationService, private employeesService: EmployeesService, private router: Router) {
    this.called = false
  }
  // Execute when component initialize
  ngOnInit() {
    this.employeesService.getCount().then(data => {
      this.totalEmployees = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.employeesService.getAll().then(data => {
      this.employees = data
    })
    this.employeesService.createEmployeesDownloadFile() // Create employees file in your local system
  }
  // Execute when you change or move to other component
  ngOnDestroy() {
    this.employeesService.removeEmployeesFile()
  }
  // Expand table button
  expandTable() {
    let classValue = this.employeeTable.nativeElement.getAttribute('class')
    if (classValue == 'grid-container') this.employeeTable.nativeElement.setAttribute('class', 'fluid')
    else this.employeeTable.nativeElement.setAttribute('class', 'grid-container')
  }
  // Show form template when add employee button is clic
  createEmployee() {
    this.called = true
  }
  // Remove current uploaded file
  removeFile() {
    this.myInputVariable.nativeElement.value = "";
    this.nameFile = ''
    this.textFile = undefined
  }
  // Execute when you select a different file
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
  // Show pop up confirm delete all employees
  openPopup() {
    this.dataReservationService.changeAdminSelected(AdminSection.employees)
      this.popup.open(PopupConfirmComponent, {
        classNames: 'custom',
        closeButton: true
      })
    }
    // Download all employees
    downloadFile() {
      this.employeesService.getDownloadFile().then(res => {
        window.open(res.url)
      }).catch(err => {
        console.log(err)
        alert('Hubo un error al descargar el archivo')
      })
    }
// Create new employee
  save() {
    if (this.textFile) { // In case you create employees from an uploaded file
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
    } else { // In case you create only one user
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
  // Show popup confirm delete when you want to remove just one element
  delete(id: string) {
    this.adminDataService.changeId(id)
    this.adminDataService.changeElement(ElementType.employees)
    this.popup2.open(PopupConfirmElementComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

}
