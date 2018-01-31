import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../../../services/reservations/reservations.service';
import { DataReservationService } from '../../../services/dataReservation/data-reservation.service';
import { AdminSection } from '../../../enums/admin-section.enum';
import { CubiclesService } from '../../../services/cubicles/cubicles.service';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { UsersService } from '../../../services/users/users.service';
import { EmployeesService } from '../../../services/employees/employees.service';
import { CareersService } from '../../../services/careers/careers.service';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.css']
})
export class PopupConfirmComponent implements OnInit {

  adminSection: AdminSection
  adminSelected: AdminSection
  adminSelectedText: string

  constructor(
    private router: Router,
    private dataReservationService: DataReservationService,
    private reservationsService: ReservationsService,
    private employeesService: EmployeesService,
    private usersService: UsersService,
    private careersService: CareersService,
    private departmentsService: DepartmentsService,
    private cubiclesService: CubiclesService
  ) { }

  ngOnInit() {
    this.adminSelected = this.dataReservationService.getAdminSelected()
  }

  getAdminText(adminChoosen) {
    switch (adminChoosen) {
      case AdminSection.students:
        return 'estudiantes'
      case AdminSection.reservations:
        return 'reservaciones'
      case AdminSection.employees:
        return 'empleados'
      case AdminSection.cubicles:
        return 'cubiculos'
      case AdminSection.careers:
        return 'carreras'
      case AdminSection.departments:
        return 'departamentos'
    }
  }

  removeAll() {
    switch(this.adminSelected) {
    case AdminSection.students:
        console.log('Estudiantes!')
        this.usersService.removeAll().then(response => {
          if (response.status == 200 || response.status == 204) {
            this.router.navigateByUrl('/home')
            setTimeout(() => {
              alert('Estudiantes eliminados exitosamente')
            }, 400)
          }
        }).catch(err => {
          alert('Error:\nNo se ha podido eliminar los estudiantes')
          console.log(err)
        })
        break;
    case AdminSection.cubicles:
        console.log('Cubiculos!')
        this.cubiclesService.removeAll().then(response => {
          if (response.status == 200 || response.status == 204) {
            this.router.navigateByUrl('/home')
            setTimeout(() => {
              alert('Cubiculos eliminados exitosamente')
            }, 400)
          }
        }).catch(err => {
          alert('Error:\nNo se ha podido eliminar los cubiculos')
          console.log(err)
        })
        break;
    case AdminSection.employees:
        console.log('Empleados!')
        this.employeesService.removeAll().then(response => {
          if (response.status == 200 || response.status == 204) {
            this.router.navigateByUrl('/home')
            setTimeout(() => {
              alert('Empleados eliminados exitosamente')
            }, 400)
          }
        }).catch(err => {
          alert('Error:\nNo se ha podido eliminar los empleados')
          console.log(err)
        })
        break;
    case AdminSection.careers:
        console.log('Carreras!')
        this.careersService.removeAll().then(response => {
          if (response.status == 200 || response.status == 204) {
            this.router.navigateByUrl('/home')
            setTimeout(() => {
              alert('Carreras eliminadas exitosamente')
            }, 400)
          }
        }).catch(err => {
          alert('Error:\nNo se ha podido eliminar las carreras')
          console.log(err)
        })
        break;
    case AdminSection.departments:
        console.log('Departamentos!')
        this.departmentsService.removeAll().then(response => {
          if (response.status == 200 || response.status == 204) {
            this.router.navigateByUrl('/home')
            setTimeout(() => {
              alert('Departamentos eliminados exitosamente')
            }, 400)
          }
        }).catch(err => {
          alert('Error:\nNo se ha podido eliminar los departamentos')
          console.log(err)
        })
        break;
    case AdminSection.reservations:
        console.log('Reservaciones!')
        this.reservationsService.removeAll().then(response => {
          if (response.status == 200 || response.status == 204) {
            this.router.navigateByUrl('/home')
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
