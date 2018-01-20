import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder } from '@angular/forms'
import { ReservationsService } from '../../../services/reservations/reservations.service';
import { UsersQuantityService } from '../../../services/usersQuantity/users.quantity.service'
import { SettingsService } from '../../../services/settings/settings.service';
import { ReservationModel } from '../../../models/reservation.model';
import { UserDivisionModel } from '../../../models/userDetails.model';
import { UserDepartmentModel } from '../../../models/userDetails.model';
import { UsersService } from '../../../services/users/users.service';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { UserModel } from '../../../models/user.model';
import { CareersService } from '../../../services/careers/careers.service';
import { ExternalUserService } from '../../../services/externalUser/external-user.service';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  updateReservation = new ReservationModel()
  newUser = new UserModel()
  registrationNumber: number
  externalUserCode: string
  reservationId: String
  currentCareers: Array<String>
  divisions: any
  quantityDepartment: number
  currentDate: string
  currentTime: string
  currentDepartureTime: string
  departments: String[] = new Array
  anyErrors: any
  departmentSelected: string
  departureTimeError: any
  selectedDivision: any
  valores: Array<any> = new Array
  employee: Boolean = false
  externalUser: Boolean

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationsService: ReservationsService,
    private usersQuantity: UsersQuantityService,
    private settingService: SettingsService,
    private usersService: UsersService,
    private careersService: CareersService,
    private departmentsService: DepartmentsService,
    private externalUserService: ExternalUserService
  ) {
    this.quantityDepartment = 1
    this.externalUser = false
  }

  ngOnInit() {
    this.settingService.loadSchoolSettings().subscribe(res => {
      this.divisions = res
      console.log(this.divisions)
    })
    this.route.params.subscribe((params: Params) => {
      this.reservationId = params['id'] //
      console.log(`Id de la reservacion: ${this.reservationId}`)
      if (this.reservationId) {
        this.reservationsService.getById(this.reservationId).then(reservation => {
            console.log(`Reservacion a actualizar: ${JSON.stringify(reservation)}`)
            let entryTime = new Date(reservation.entryTime)
            let hour = entryTime.getHours().toString()
            if (parseInt(hour) >= 0 && parseInt(hour) <= 9) {
              hour = '0' + hour
              console.log(hour)
            }
            let minutes = entryTime.getMinutes() < 10 ? `0${entryTime.getMinutes()}` : entryTime.getMinutes()
            this.currentTime = `${hour}:${minutes}`
            let reservationDate = new Date(reservation.reservationDate)
            let day = reservationDate.getDate().toString()
            let month = reservationDate.getMonth()+1
            let year = reservationDate.getFullYear()
            if (parseInt(day) >= 1 && parseInt(day) <= 9) {
              day = '0' + day
              console.log(day)
            }
            if (month >= 1 && month <= 9) {
              this.currentDate = `${year}-0${month}-${day}`
            } else {
              this.currentDate = `${year}-${month}-${day}`
            }
            let departureTime = new Date(reservation.departureTime)
            let departureHour = departureTime.getHours().toString()
            if (parseInt(departureHour) >= 0 && parseInt(departureHour) <= 9) {
              departureHour = '0' + departureHour
              console.log(departureHour)
            }
            let departureMinutes = departureTime.getMinutes() < 10 ? `0${departureTime.getMinutes()}` : departureTime.getMinutes()
            this.currentDepartureTime = `${departureHour}:${departureMinutes}`
            this.updateReservation = reservation
            if (reservation.hasOwnProperty('user')) {
                this.registrationNumber = reservation.user['registrationNumber']
                this.updateReservation.user = reservation.user
            } else if (reservation.hasOwnProperty('employee')) {
              this.employee = true
              this.registrationNumber = reservation.employee['employeeNumber']
              this.updateReservation.employee = reservation.employee
            } else {
              this.externalUser = true
              this.externalUserCode = reservation.externalUser['userCode']
              this.updateReservation.externalUser = reservation.externalUser
            }
            console.log(this.updateReservation)
        })
      }
    })
    this.departmentsService.getAll().then(data => {
      data.forEach(department => {
        this.departments.push(department.departmentName)
      })
    })
  }

  update() {
    console.log(this.employee)
    this.updateReservation.entryTime = new Date(`${this.currentDate}, ${this.currentTime}`)
    this.updateReservation.departureTime = new Date(`${this.currentDate}, ${this.currentDepartureTime}`)
    this.updateReservation.reservationDate = new Date(`${this.currentDate}, ${this.currentTime}`)
    if (this.employee) {
        if (this.registrationNumber != this.updateReservation.employee.employeeNumber) {
          console.log(this.registrationNumber)
          this.usersService.getByRegistrationNumber(this.registrationNumber).then(user => {
            let employee = JSON.parse(JSON.stringify(user)).empleado
            this.updateReservation.employee = employee
            this.reservationsService.update(this.reservationId, this.updateReservation).then(response => {
              if (response.status == 200 || response.status == 204) {
                console.log(response.json())
                this.router.navigateByUrl('/')
              }
            }).catch(error => {
              this.anyErrors = JSON.parse(error._body)
              console.log(this.anyErrors)
            })
          }).catch(err => {
            this.anyErrors = JSON.parse(err._body)
          })
        }
    } else if (this.externalUser) {
      if (this.externalUserCode != this.updateReservation.externalUser.userCode) {
        this.externalUserService.getByUserCode(this.externalUserCode).then(user => {
          let external = JSON.parse(JSON.stringify(user)).usuario
          console.log(external)
          this.updateReservation.externalUser = external
          console.log(this.updateReservation.externalUser)
          this.reservationsService.update(this.reservationId, this.updateReservation).then(response => {
            if (response.status == 200 || response.status == 204) {
              console.log(response.json())
              this.router.navigateByUrl('/')
            }
          }).catch(error => {
            this.anyErrors = JSON.parse(error._body)
            console.log(this.anyErrors)
          })
        }).catch(err => {
          this.anyErrors = JSON.parse(err._body)
        })
      }
    } else {
      if (this.registrationNumber != this.updateReservation.user.registrationNumber) {
        this.usersService.getByRegistrationNumber(this.registrationNumber).then(user => {
          let student = JSON.parse(JSON.stringify(user)).usuario
          this.updateReservation.user = student
          console.log(this.updateReservation.user)
          this.reservationsService.update(this.reservationId, this.updateReservation).then(response => {
            if (response.status == 200 || response.status == 204) {
              console.log(response.json())
              this.router.navigateByUrl('/')
            }
          }).catch(error => {
            this.anyErrors = JSON.parse(error._body)
            console.log(this.anyErrors)
          })
        }).catch(err => {
          this.anyErrors = JSON.parse(err._body)
        })
      }
    }

      // if (this.employee) {
      //   if (this.registrationNumber != this.updateReservation.employee.employeeNumber) {
      //     console.log(this.registrationNumber)
      //     this.usersService.getByRegistrationNumber(this.registrationNumber).then(user => {
      //       let student = JSON.parse(JSON.stringify(user)).usuario
      //       console.log(student)
      //       let employee = JSON.parse(JSON.stringify(user)).empleado
      //       if (student) {
      //         this.updateReservation.employee = null
      //         this.updateReservation.user = student
      //         console.log(this.updateReservation.user)
      //       } else {
      //         this.updateReservation.employee = employee
      //       }
      //     }).catch(err => {
      //       this.anyErrors = JSON.parse(err._body)
      //     })
      //   }
      // } else {
      //   if (this.registrationNumber != this.updateReservation.user.registrationNumber) {
      //     this.usersService.getByRegistrationNumber(this.registrationNumber).then(user => {
      //       let student = JSON.parse(JSON.stringify(user)).usuario
      //       console.log(student)
      //         this.updateReservation.user = student
      //         console.log(this.updateReservation.user)
      //
      //     }).catch(err => {
      //       this.anyErrors = JSON.parse(err._body)
      //     })
      //   }
      // }

    // this.reservationsService.update(this.reservationId, this.updateReservation).then(response => {
    //   if (response.status == 200 || response.status == 204) {
    //     console.log(response.json())
    //     this.router.navigateByUrl('/')
    //   }
    // }).catch(error => {
    //   this.anyErrors = JSON.parse(error._body)
    //   console.log(this.anyErrors)
    // })
  }

  // codeOnChange(event) {
  //   if (this.employee) {
  //     this.updateReservation.employee.employeeNumber = event
  //   } else if (this.externalUser) {
  //     this.updateReservation.externalUser.userCode = event
  //   } else {
  //     this.updateReservation.user.registrationNumber = event
  //   }
  // }

  searchUser() {
    this.usersService.getByRegistrationNumber(this.registrationNumber).then(data => {
      // console.log(JSON.parse(JSON.stringify(data)).usuario || JSON.parse(JSON.stringify(data)).empleado)
      this.anyErrors = JSON.parse(JSON.stringify(data))
      // this.newReservation.user = user
    }).catch(err => this.anyErrors = JSON.parse(err._body))
  }

  departmentChange(event) {
    this.selectedDivision = {}
    let sigue: boolean = false
    console.log(event)
    this.currentCareers = []
    if (this.updateReservation.usersDetails) {
      this.updateReservation.usersDetails.forEach((e, index) => {
        if (event == e.department) {
          this.quantityDepartment = e.quantity
          sigue = true
        }
      })
    }
    if (!sigue) this.quantityDepartment = 0
    this.departmentSelected = event
    console.log(event)
    this.usersQuantity.setDepartmentSelected(event)
    console.log(`Department selected: ${this.usersQuantity.getDepartmentSelected()}`)
  }

  divisionChange(newDivision) {
    this.departmentSelected = ''
    this.currentCareers = new Array
    this.valores = []
    console.log(newDivision.division)
    this.usersQuantity.setDivisionSelected(newDivision.division)
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
    console.log(`Division selected: ${this.usersQuantity.getDivisionSelected()}, Careers: ${this.currentCareers}`)
  }

  decrement(career: string) {
    if (this.usersQuantity.getCareer() == null || undefined) {

    } else {
        if (this.usersQuantity.getCareer() != career) {
          let sigue = false
          this.updateReservation.usersDetails.forEach((carrera, index) => {
            if (career == carrera.career) {
                carrera.quantity-=1
                this.valores.forEach(element => {
                  if (element.career == career) {
                    element.count = carrera.quantity
                  }
                })
                if (carrera.quantity == 0) {
                  this.updateReservation.usersDetails.splice(index, 1)
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
                let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber, this.externalUserCode)
                this.updateReservation.usersDetails.push(newDivisionUser)
              }

          }
        } else {
          this.updateReservation.usersDetails.forEach((carrera, index) => {
            if (career == carrera.career) {
                carrera.quantity-=1
                this.valores.forEach(element => {
                  if (element.career == career) {
                    element.count = carrera.quantity
                  }
                })
                if (carrera.quantity == 0) {
                  if (this.updateReservation.usersDetails.length == 1) {
                    this.updateReservation.usersDetails.splice(index, 1)
                  } else {
                    this.usersQuantity.setCareer(this.updateReservation.usersDetails[index-1].career)
                    this.updateReservation.usersDetails.splice(index, 1)
                  }
                }
            }
          })
        }
    }
    if (this.updateReservation.peopleQuantity > 0) {
      this.updateReservation.peopleQuantity-=1
    }
    console.log(this.updateReservation.usersDetails)
  }

  increment(career: string) {
    if (this.usersQuantity.getCareer() == null || undefined) {
      this.usersQuantity.setCareer(career)
      let selectedCareer = career
      let quantity = this.usersQuantity.getUsersCounter() + 1
      this.valores.forEach(element => {
        if (element.career == career) {
          element.count = quantity
        }
      })
      let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber, this.externalUserCode)
      this.updateReservation.usersDetails.push(newDivisionUser)
    } else {
        if (this.usersQuantity.getCareer() != career) {
          let sigue = false
          this.updateReservation.usersDetails.forEach(carrera => {
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
              let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber, this.externalUserCode)
              this.updateReservation.usersDetails.push(newDivisionUser)
          }
        } else {
          if (this.updateReservation.usersDetails.length == 0) {
            let selectedCareer = career
            let quantity = this.usersQuantity.getUsersCounter() + 1
            this.valores.forEach(element => {
              if (element.career == career) {
                element.count = quantity
              }
            })
            let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber, this.externalUserCode)
            this.updateReservation.usersDetails.push(newDivisionUser)
          } else {
            this.updateReservation.usersDetails.forEach(carrera => {
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
    this.updateReservation.peopleQuantity+=1
    console.log(this.updateReservation.usersDetails)
  }

  decrementDepartment() {
    this.quantityDepartment -= 1
    this.updateReservation.usersDetails.forEach((e, index) => {
      if (this.usersQuantity.getDepartmentSelected() == e.department) {
          e.quantity -= 1
          if (e.quantity == 0) {
            this.updateReservation.usersDetails.splice(index, 1)
          }
      }
    })
    if (this.updateReservation.peopleQuantity > 0) {
      this.updateReservation.peopleQuantity-=1
    }
    console.log(this.updateReservation.usersDetails)
  }

  incrementDepartment() {
    let exist = false
    this.quantityDepartment += 1
    this.updateReservation.usersDetails.forEach((e, index) => {
      if (this.usersQuantity.getDepartmentSelected() == e.department) {
          e.quantity += 1
          exist = true
      }
    })
    if (!exist) {
      let newDepartmentUser = new UserDepartmentModel(this.quantityDepartment, this.usersQuantity.getDepartmentSelected(), this.registrationNumber, this.externalUserCode)
      this.updateReservation.usersDetails.push(newDepartmentUser)
    }
    this.updateReservation.peopleQuantity += 1
    console.log(this.updateReservation.usersDetails)
  }



}
