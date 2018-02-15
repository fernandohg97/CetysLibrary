import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { EmployeesService } from '../../../services/employees/employees.service';
import { ExternalUserService } from '../../../services/externalUser/external-user.service';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { CareersService } from '../../../services/careers/careers.service';
import { CubiclesService } from '../../../services/cubicles/cubicles.service';
import { ReservationsService } from '../../../services/reservations/reservations.service';
import { AdminDataService } from '../../../services/adminData/admin-data.service';
import { ElementType } from '../../../enums/element-type.enum';
import { NguiPopupComponent } from '@ngui/popup';

@Component({
  selector: 'app-popup-confirm-element',
  templateUrl: './popup-confirm-element.component.html',
  styleUrls: ['./popup-confirm-element.component.css']
})
export class PopupConfirmElementComponent implements OnInit {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  currentElementType: ElementType
  ElementType: ElementType
  currentId: string

  constructor(
    private usersService: UsersService,
    private cubiclesService: CubiclesService,
    private departmentsService: DepartmentsService,
    private careersService: CareersService,
    private reservationsService: ReservationsService,
    private externalUserService: ExternalUserService,
    private employeesService: EmployeesService,
    private adminDataService: AdminDataService
  ) { }

  ngOnInit() {
    this.currentId = this.adminDataService.getCurrentId()
    this.currentElementType = this.adminDataService.getCurrentElement()
  }

  remove() {
    switch(this.currentElementType) {
      case ElementType.students:
          console.log('Estudiantes!')
          this.usersService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              setTimeout(() => {
                alert('Estudiantes eliminados exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar los estudiantes')
            console.log(err)
          })
          break;
      case ElementType.cubicles:
          console.log('Cubiculos!')
          this.cubiclesService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              setTimeout(() => {
                alert('Cubiculos eliminados exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar cubiculos')
            console.log(err)
          })
          break;
      case ElementType.employees:
          console.log('Empleados!')
          this.employeesService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              setTimeout(() => {
                alert('Empleados eliminados exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar los empleados')
            console.log(err)
          })
          break;
      case ElementType.careers:
          console.log('Carreras!')
          this.careersService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              setTimeout(() => {
                alert('Carreras eliminadas exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar las carreras')
            console.log(err)
          })
          break;
      case ElementType.departments:
          console.log('Departamentos!')
          this.departmentsService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              setTimeout(() => {
                alert('Departamentos eliminados exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar los departamentos')
            console.log(err)
          })
          break;
      case ElementType.reservations:
          console.log('Reservaciones!')
          this.reservationsService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              setTimeout(() => {
                alert('Reservaciones eliminadas exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar las reservaciones')
            console.log(err)
          })
          break;
      case ElementType.externals:
          console.log('Reservaciones!')
          this.reservationsService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              setTimeout(() => {
                alert('Reservaciones eliminadas exitosamente')
                }, 400)
              }
            }).catch(err => {
              alert('Error:\nNo se ha podido eliminar las reservaciones')
              console.log(err)
            })
            break;

    }

  }

}
