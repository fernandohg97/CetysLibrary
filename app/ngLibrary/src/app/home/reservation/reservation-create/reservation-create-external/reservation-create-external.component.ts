import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ReservationsService } from '../../../../services/reservations/reservations.service';
import { CubiclesService } from '../../../../services/cubicles/cubicles.service';
import { SettingsService } from '../../../../services/settings/settings.service';
import { DepartmentsService } from '../../../../services/departments/departments.service';
import { UsersQuantityService } from '../../../../services/usersQuantity/users.quantity.service';
import { ExternalUserService } from '../../../../services/externalUser/external-user.service';
import { ExternalUserModel } from '../../../../models/externalUser.model';
import { ReservationModel } from '../../../../models/reservation.model';
import { UserDepartmentModel } from '../../../../models/userDetails.model';
import { UserDivisionModel } from '../../../../models/userDetails.model';
import { CareersService } from '../../../../services/careers/careers.service';
import { DataReservationService } from '../../../../services/dataReservation/data-reservation.service';

@Component({
  selector: 'app-reservation-create-external',
  templateUrl: './reservation-create-external.component.html',
  styleUrls: ['./reservation-create-external.component.css']
})
export class ReservationCreateExternalComponent implements OnInit {

  valores: Array<any> = new Array
  newReservation = new ReservationModel()
  newUser = new ExternalUserModel()
  registrationNumber: string
  departureTime: string
  currentDate: string
  currentTime: string
  currentUser: ExternalUserModel
  currentCareers: Array<String>
  currentDepartment: string
  quantityDepartment: number = 0
  divisions: any
  selectedDivision: any
  departments: String[] = new Array
  anyErrors: any
  departmentSelected: string
  departureTimeError: any
  called: Boolean

  constructor(
    private dataReservationService: DataReservationService,
    private departmentsService: DepartmentsService,
    private usersQuantity: UsersQuantityService,
    private settingService: SettingsService,
    private cubiclesService: CubiclesService,
    private reservationsService: ReservationsService,
    private careersService: CareersService,
    private externalUserService: ExternalUserService,
    private router: Router,
    private route: ActivatedRoute
  ) { this.called = true }

  ngOnInit() {
    let hour = this.newReservation.entryTime.getHours().toString()
    let minutes = this.newReservation.entryTime.getMinutes()

    if (parseInt(hour) >= 0 && parseInt(hour) <= 9) {
      hour = '0' + hour
    }
    if (minutes >= 0 && minutes <= 9) {
      this.currentTime = `${hour}:0${minutes}`
    } else {
      this.currentTime = `${hour}:${minutes}`
    }

    let day = this.newReservation.reservationDate.getDate().toString()
    let month = this.newReservation.reservationDate.getMonth()+1
    let year = this.newReservation.reservationDate.getFullYear()

    if (parseInt(day) >= 1 && parseInt(day) <= 9) {
      day = '0' + day
    }
    if (month >= 1 && month <= 9) {
      this.currentDate = `${year}-0${month}-${day}`
    } else {
      this.currentDate = `${year}-${month}-${day}`
    }

    this.settingService.loadSchoolSettings().subscribe(res => {
      this.divisions = res
    })
    this.departmentsService.getAll().then(data => {
      data.forEach(department => {
        this.departments.push(department.departmentName)
      })
    })
    this.route.params.subscribe((params: Params) => {
      let cubicleNumberId = params['id'] //
      if (cubicleNumberId) {
        this.cubiclesService.getById(cubicleNumberId).then(cubicle => {
          this.newReservation.cubicle = cubicle.cubicleNumber
        })
      }
    })
  }

  save() {
    this.newReservation.entryTime = new Date(`${this.currentDate} ${this.currentTime}`)
    this.newReservation.departureTime = new Date(`${this.currentDate} ${this.departureTime}`)
    this.newReservation.reservationDate = new Date(`${this.currentDate} ${this.currentTime}`)

    this.externalUserService.getByUserCode(this.registrationNumber).then(user => {
      let externalUser = JSON.parse(JSON.stringify(user)).usuario
      this.newReservation.externalUser = externalUser
      this.reservationsService.create(this.newReservation)
      .subscribe(
        data => {
          setTimeout(() => {
            alert(`Reservacion realizada exitosamente`)
          }, 500)
          this.router.navigateByUrl('/')
        },
        err => {
          this.anyErrors = JSON.parse(err._body)
          this.departureTimeError = JSON.parse(err._body)
        }
      )
    }).catch(error => {
        this.anyErrors = JSON.parse(error._body)
    })
  }

  searchUser() {
    this.anyErrors = ''
    this.externalUserService.getByUserCode(this.registrationNumber).then(data => {
      this.currentUser = JSON.parse(JSON.stringify(data)).usuario
    }).catch(err => {
      this.currentUser = null
      this.anyErrors = JSON.parse(err._body)
    })
  }

  divisionChange(newDivision) {
    this.departmentSelected = ''
    this.currentCareers = new Array
    this.valores = []
    this.careersService.getByDivision(newDivision.division).then(data => {
      if (data.length >= 1) {
        data.forEach(career => {
          this.currentCareers.push(career.careerCode)
          this.valores.push({
            career: career.careerCode,
            count: 0
          })
        })
      } else {
        this.currentCareers.push('EXT')
        this.valores.push({
          career: 'EXT',
          count: 0
        })
      }
    })
    this.usersQuantity.setDivisionSelected(newDivision.division)
  }

  departmentChange(event) {
    this.selectedDivision = {}
    let sigue: boolean = false
    this.currentCareers = []
    if (this.newReservation.usersDetails) {
      this.newReservation.usersDetails.forEach((e, index) => {
        if (event == e.department) {
          this.quantityDepartment = e.quantity
          sigue = true
        }
      })
    }
    if (!sigue) this.quantityDepartment = 0
    this.departmentSelected = event
    this.usersQuantity.setDepartmentSelected(event)
  }

  decrementCareer(career: string) {
    if (this.usersQuantity.getCareer() == null || undefined) {

    } else {
        if (this.usersQuantity.getCareer() != career) {
          let sigue = false
          this.newReservation.usersDetails.forEach((carrera, index) => {
            if (career == carrera.career) {
                carrera.quantity-=1
                this.valores.forEach(element => {
                  if (element.career == career) {
                    element.count = carrera.quantity
                  }
                })
                if (carrera.quantity == 0) {
                  this.newReservation.usersDetails.splice(index, 1)
                }
                sigue = true
            }
          })
          if (sigue == false) {
              this.usersQuantity.setCareer(career)
              let selectedCareer = career
              let quantity = this.usersQuantity.getUsersCounter() - 1
              this.valores.forEach(element => {
                if (element.career == career) {
                  element.count = quantity
                }
              })
              if (quantity > 0) {
                let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, undefined, this.registrationNumber)
                this.newReservation.usersDetails.push(newDivisionUser)
              }
          }
        } else {
          this.newReservation.usersDetails.forEach((carrera, index) => {
            if (career == carrera.career) {
                carrera.quantity-=1
                this.valores.forEach(element => {
                  if (element.career == career) {
                    element.count = carrera.quantity
                  }
                })
                if (carrera.quantity == 0) {
                  if (this.newReservation.usersDetails.length == 1) {
                    this.newReservation.usersDetails.splice(index, 1)
                  } else {
                    this.usersQuantity.setCareer(this.newReservation.usersDetails[index-1].career)
                    this.newReservation.usersDetails.splice(index, 1)
                  }
                }
            }
          })
        }
    }
    if (this.newReservation.peopleQuantity > 0) {
      this.newReservation.peopleQuantity-=1
    }
  }

  incrementCareer(career: string) {
    if (this.usersQuantity.getCareer() == null || undefined) {
      this.usersQuantity.setCareer(career)
      let selectedCareer = career
      let quantity = this.usersQuantity.getUsersCounter() + 1
      this.valores.forEach(element => {
        if (element.career == career) {
          element.count = quantity
        }
      })
      let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, undefined, this.registrationNumber)
      this.newReservation.usersDetails.push(newDivisionUser)
    } else {
        if (this.usersQuantity.getCareer() != career) {
          let sigue = false
          this.newReservation.usersDetails.forEach(carrera => {
            if (career == carrera.career) {
                carrera.quantity+=1
                this.valores.forEach(element => {
                  if (element.career == career) {
                    element.count = carrera.quantity
                  }
                })
                sigue = true
            }
          })
          if (sigue == false) {
              this.usersQuantity.setCareer(career)
              let selectedCareer = career
              let quantity = this.usersQuantity.getUsersCounter() + 1
              this.valores.forEach(element => {
                if (element.career == career) {
                  element.count = quantity
                }
              })
              let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, undefined, this.registrationNumber)
              this.newReservation.usersDetails.push(newDivisionUser)
          }
        } else {
          if (this.newReservation.usersDetails.length == 0) {
            let selectedCareer = career
            let quantity = this.usersQuantity.getUsersCounter() + 1
            this.valores.forEach(element => {
              if (element.career == career) {
                element.count = quantity
              }
            })
            let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, undefined, this.registrationNumber)
            this.newReservation.usersDetails.push(newDivisionUser)
          } else {
            this.newReservation.usersDetails.forEach(carrera => {
              if (career == carrera.career) {
                  carrera.quantity+=1
                  this.valores.forEach(element => {
                    if (element.career == career) {
                      element.count = carrera.quantity
                    }
                  })
              }
            })
          }
        }
    }
    this.newReservation.peopleQuantity+=1
  }

  decrementDepartment() {
    this.quantityDepartment -= 1
    this.newReservation.usersDetails.forEach((e, index) => {
      if (this.usersQuantity.getDepartmentSelected() == e.department) {
          e.quantity -= 1
          if (e.quantity == 0) {
            this.newReservation.usersDetails.splice(index, 1)
          }
      }
    })
    if (this.newReservation.peopleQuantity > 0) {
      this.newReservation.peopleQuantity-=1
    }
  }

  incrementDepartment() {
    let exist = false
    this.quantityDepartment += 1
    this.newReservation.usersDetails.forEach((e, index) => {
      if (this.usersQuantity.getDepartmentSelected() == e.department) {
          e.quantity += 1
          exist = true
      }
    })
    if (!exist) {
      let newDepartmentUser = new UserDepartmentModel(this.quantityDepartment, this.usersQuantity.getDepartmentSelected(), undefined, this.registrationNumber)
      this.newReservation.usersDetails.push(newDepartmentUser)
    }
    this.newReservation.peopleQuantity += 1
  }


}
