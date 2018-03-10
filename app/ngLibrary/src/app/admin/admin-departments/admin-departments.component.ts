import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { DepartmentsService } from '../../services/departments/departments.service';
import { DepartmentModel } from '../../models/department.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupConfirmComponent } from '../../home/home-dialogs/popup-confirm/popup-confirm.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { AdminSection } from '../../enums/admin-section.enum';
import { ElementType } from '../../enums/element-type.enum';
import { AdminDataService } from '../../services/adminData/admin-data.service';
import { PopupConfirmElementComponent } from '../../home/home-dialogs/popup-confirm-element/popup-confirm-element.component';

@Component({
  selector: 'app-admin-departments',
  templateUrl: './admin-departments.component.html',
  styleUrls: ['./admin-departments.component.css']
})
export class AdminDepartmentsComponent implements OnInit, OnDestroy {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup2: NguiPopupComponent;
  @ViewChild('departmentTable') departmentTable: ElementRef;
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
  totalDepartments: number

  constructor(private adminDataService: AdminDataService, private dataReservationService: DataReservationService, private departmentsService: DepartmentsService, private router: Router) {
    this.called = false
  }

  ngOnInit() {
    this.departmentsService.getCount().then(data => {
      this.totalDepartments = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.departmentsService.getAll().then(data => {
      this.departments = data
    })
    this.departmentsService.createDepartmentsDownloadFile()
  }

  ngOnDestroy() {
    this.departmentsService.removeDepartmentsFile()
  }

  expandTable() {
    let classValue = this.departmentTable.nativeElement.getAttribute('class')
    if (classValue == 'grid-container') this.departmentTable.nativeElement.setAttribute('class', 'fluid')
    else this.departmentTable.nativeElement.setAttribute('class', 'grid-container')
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

  openPopup() {
    this.dataReservationService.changeAdminSelected(AdminSection.departments)
      this.popup.open(PopupConfirmComponent, {
        classNames: 'custom',
        closeButton: true
      })
    }

    downloadFile() {
      this.departmentsService.getDownloadFile().then(res => {
        window.open(res.url)
      }).catch(err => {
        console.log(err)
        alert('Hubo un error al descargar el archivo')
      })
    }

  save() {
    if (this.textFile) {
      let jsonFiles = JSON.parse(this.textFile)
      this.departmentsService.createFile(jsonFiles)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Departamentos creados exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => this.errorFile = JSON.parse(err._body).existDepartments)
      )
    } else {
      this.departmentsService.create(this.newDepartment)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Departamento creado exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.anyErrors = JSON.parse(err._body)
        this.errorItem = JSON.parse(err._body).existDepartment
      })
      )
    }
  }

  delete(id: string) {
    this.adminDataService.changeId(id)
    this.adminDataService.changeElement(ElementType.departments)
    this.popup2.open(PopupConfirmElementComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }
}
