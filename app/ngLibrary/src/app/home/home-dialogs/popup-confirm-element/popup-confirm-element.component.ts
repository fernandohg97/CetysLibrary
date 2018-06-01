import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { EmployeesService } from '../../../services/employees/employees.service';
import { ExternalUserService } from '../../../services/externalUser/external-user.service';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { CareersService } from '../../../services/careers/careers.service';
import { CubiclesService } from '../../../services/cubicles/cubicles.service';
import { ReservationsService } from '../../../services/reservations/reservations.service';
import { CompanionsService } from '../../../services/companions/companions.service';
import { AdminDataService } from '../../../services/adminData/admin-data.service';
import { CompanionModel } from '../../../models/companion.model';
import { ElementType } from '../../../enums/element-type.enum';
import { NguiPopupComponent } from '@ngui/popup';
import { Router, ActivatedRoute } from '@angular/router';

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
  currentCompanion: CompanionModel

  constructor(
    private router: Router,
    private usersService: UsersService,
    private cubiclesService: CubiclesService,
    private departmentsService: DepartmentsService,
    private careersService: CareersService,
    private reservationsService: ReservationsService,
    private externalUserService: ExternalUserService,
    private employeesService: EmployeesService,
    private adminDataService: AdminDataService,
    private companionsService: CompanionsService
  ) { }
  // Execute when component initialize
  ngOnInit() {
    this.companionsService.getByReservation(this.adminDataService.getCurrentReservationId()).then(companion => {
      console.log(companion)
      console.log(companion._id)
      this.currentCompanion = companion
    })
    this.currentId = this.adminDataService.getCurrentId()
    this.currentElementType = this.adminDataService.getCurrentElement()
  }
  // Remove one selected element
  remove() {
    switch(this.currentElementType) {
      case ElementType.students:
          this.usersService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              this.router.navigateByUrl('/admin-site')
              setTimeout(() => {
                alert('Estudiante eliminado exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar los estudiantes')
          })
          break;
      case ElementType.cubicles:
          this.cubiclesService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              this.router.navigateByUrl('/admin-site')
              setTimeout(() => {
                alert('Cubiculo eliminado exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar cubiculos')
          })
          break;
      case ElementType.employees:
          this.employeesService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              this.router.navigateByUrl('/admin-site')
              setTimeout(() => {
                alert('Empleado eliminado exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar los empleados')
          })
          break;
      case ElementType.careers:
          this.careersService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              this.router.navigateByUrl('/admin-site')
              setTimeout(() => {
                alert('Carrera eliminada exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar las carreras')
          })
          break;
      case ElementType.departments:
          this.departmentsService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              this.router.navigateByUrl('/admin-site')
              setTimeout(() => {
                alert('Departamento eliminado exitosamente')
              }, 400)
            }
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar los departamentos')
          })
          break;
      case ElementType.reservations:
          this.reservationsService.remove(this.currentId).then(response => {
            this.companionsService.remove(this.currentCompanion._id).then(response => {
              if (response.status == 200 || response.status == 204) {
                this.router.navigateByUrl('/home')
                setTimeout(() => {
                  alert('Reservacion eliminada exitosamente')
                }, 400)
              }
            }).catch(err => err)
          }).catch(err => {
            alert('Error:\nNo se ha podido eliminar la reservacion')
          })
          break;
      case ElementType.externals:
          this.reservationsService.remove(this.currentId).then(response => {
            if (response.status == 200 || response.status == 204) {
              this.router.navigateByUrl('/admin-site')
              setTimeout(() => {
                alert('Externo eliminado exitosamente')
                }, 400)
              }
            }).catch(err => {
              alert('Error:\nNo se ha podido eliminar los usuarios externos')
            })
            break;
    }
  }
}
