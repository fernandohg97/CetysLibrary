import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder } from '@angular/forms'
import { ReservationsService } from '../../../services/reservations/reservations.service';
import { UsersQuantityService } from '../../../services/usersQuantity/users.quantity.service'
import { SettingsService } from '../../../services/settings/settings.service';
import { ReservationModel } from '../../../models/reservation.model';
import { UserDivisionModel } from '../../../models/userDetails.model';
import { UserDepartmentModel } from '../../../models/userDetails.model';
import { CompanionModel } from '../../../models/companion.model';
import { UsersService } from '../../../services/users/users.service';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { UserModel } from '../../../models/user.model';
import { CareersService } from '../../../services/careers/careers.service';
import { CompanionsService } from '../../../services/companions/companions.service';
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
  companion: CompanionModel
  companions: Array<CompanionModel> = new Array()

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationsService: ReservationsService,
    private usersQuantity: UsersQuantityService,
    private settingService: SettingsService,
    private usersService: UsersService,
    private careersService: CareersService,
    private departmentsService: DepartmentsService,
    private externalUserService: ExternalUserService,
    private companionsService: CompanionsService
  ) {
    this.quantityDepartment = 1
    this.externalUser = false
  }
  // Execute when component initialize
  ngOnInit() {
    this.settingService.loadSchoolSettings().subscribe(res => {
      this.divisions = res
    })
    this.route.params.subscribe((params: Params) => {
      this.reservationId = params['id'] //
      if (this.reservationId) {
        this.companionsService.getByReservation(this.reservationId).then(companion => {
          this.companion = companion
          console.log(this.companion)
        })
        this.reservationsService.getById(this.reservationId).then(reservation => {
          console.log(reservation)
            let entryTime = new Date(reservation.entryTime)
            let hour = entryTime.getHours().toString()
            if (parseInt(hour) >= 0 && parseInt(hour) <= 9) {
              hour = '0' + hour
            }
            let minutes = entryTime.getMinutes() < 10 ? `0${entryTime.getMinutes()}` : entryTime.getMinutes()
            this.currentTime = `${hour}:${minutes}`
            let reservationDate = new Date(reservation.reservationDate)
            this.currentDate = reservationDate.toISOString().split('T')[0]
            console.log(this.currentDate)
            let departureTime = new Date(reservation.departureTime)
            let departureHour = departureTime.getHours().toString()
            if (parseInt(departureHour) >= 0 && parseInt(departureHour) <= 9) {
              departureHour = '0' + departureHour
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
        })
      }
    })
    this.departmentsService.getAll().then(data => {
      data.forEach(department => {
        this.departments.push(department.departmentName)
      })
    })
  }
  // Update and valid info reservation
  update() {
    this.updateReservation.entryTime = new Date(`${this.currentDate} ${this.currentTime}`)
    this.updateReservation.departureTime = new Date(`${this.currentDate} ${this.currentDepartureTime}`)
    this.updateReservation.reservationDate = new Date(this.currentDate)
    if (this.employee) {
        if (this.registrationNumber != this.updateReservation.employee.employeeNumber) {
          this.usersService.getByRegistrationNumber(this.registrationNumber).then(user => {
            let employee = JSON.parse(JSON.stringify(user)).empleado
            this.updateReservation.employee = employee
            this.reservationsService.update(this.reservationId, this.updateReservation).then(response => {
              console.log(response['_body'].reservationUpdated)
              let currentReservation = JSON.parse(response['_body'].reservationUpdated)
              // Set companions
              // for (let i = 0; i < currentReservation.usersDetails.length; i++) {
              //   let companion = new CompanionModel(
              //     currentReservation.reservationDate,
              //     currentReservation.usersDetails[i].quantity,
              //     currentReservation._id,
              //     currentReservation.usersDetails[i].registrationNumber,
              //     currentReservation.usersDetails[i].userCode,
              //     currentReservation.usersDetails[i].division,
              //     currentReservation.usersDetails[i].career,
              //     currentReservation.usersDetails[i].department
              //     )
              //   this.companions.push(companion)
              // }
              // if (this.companions.length > 1) { // create one companion
              //   this.companionsService.createMany(this.companions)
              //   .subscribe(
              //     (response => console.log(response)),
              //     (err => console.log(err))
              //   )
              // } else if (this.companions.length == 1) { // create many companions
              //   this.companionsService.create(this.companions[0])
              //   .subscribe(
              //     (response => console.log(response)),
              //     (err => console.log(err))
              //   )
              // }
              if (response.status == 200 || response.status == 204) {
                setTimeout(() => {
                  alert(`Reservacion actualizada exitosamente`)
                }, 500)
                this.router.navigateByUrl('/')
              }
            }).catch(error => {
              this.anyErrors = JSON.parse(error._body)
            })
          }).catch(err => {
            this.anyErrors = JSON.parse(err._body)
          })
        } else {
          this.updateInfo()
        }
    } else if (this.externalUser) {
      if (this.externalUserCode != this.updateReservation.externalUser.userCode) {
        this.externalUserService.getByUserCode(this.externalUserCode).then(user => {
          let external = JSON.parse(JSON.stringify(user)).usuario
          this.updateReservation.externalUser = external
          this.reservationsService.update(this.reservationId, this.updateReservation).then(response => {
            console.log(response)
            if (response.status == 200 || response.status == 204) {
              setTimeout(() => {
                alert(`Reservacion actualizada exitosamente`)
              }, 500)
              this.router.navigateByUrl('/')
            }
          }).catch(error => {
            this.anyErrors = JSON.parse(error._body)
          })
        }).catch(err => {
          this.anyErrors = JSON.parse(err._body)
        })
      } else {

        this.updateInfo()
      }
    } else {
      if (this.registrationNumber != this.updateReservation.user.registrationNumber) {
        this.usersService.getByRegistrationNumber(this.registrationNumber).then(user => {
          let student = JSON.parse(JSON.stringify(user)).usuario
          this.updateReservation.user = student
          this.reservationsService.update(this.reservationId, this.updateReservation).then(response => {
            console.log(response)
            if (response.status == 200 || response.status == 204) {
              setTimeout(() => {
                alert(`Reservacion actualizada exitosamente`)
              }, 500)
              this.router.navigateByUrl('/')
            }
          }).catch(error => {
            this.anyErrors = JSON.parse(error._body)
          })
        }).catch(err => {
          this.anyErrors = JSON.parse(err._body)
        })
      } else {
        this.updateInfo()
      }
    }
  }
  // Update reservation
  updateInfo() {
    this.reservationsService.update(this.reservationId, this.updateReservation).then(response => {
      console.log(JSON.parse(response['_body']).reservationUpdated)

      if (response.status == 200 || response.status == 204) {
        setTimeout(() => {
          alert(`Reservacion actualizada exitosamente`)
        }, 500)
        this.router.navigateByUrl('/')
      }
    }).catch(error => {
      this.anyErrors = JSON.parse(error._body)
    })
  }
  // Change user number input
  changeUserNumber(newValue) {
    if (this.externalUser) {
      this.externalUserCode = newValue
    } else {
      this.registrationNumber = newValue
    }
  }
  // Validate if users exists in database
  searchUser() {
    if (this.externalUser) {
      this.externalUserService.getByUserCode(this.externalUserCode).then(data => {
        this.anyErrors = JSON.parse(JSON.stringify(data))
      }).catch(err => this.anyErrors = JSON.parse(err._body))
    } else {
      this.usersService.getByRegistrationNumber(this.registrationNumber).then(data => {
        this.anyErrors = JSON.parse(JSON.stringify(data))
      }).catch(err => this.anyErrors = JSON.parse(err._body))
    }
  }
  // When you select a department
  departmentChange(event) {
    this.selectedDivision = {}
    let sigue: boolean = false
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
    this.usersQuantity.setDepartmentSelected(event)
  }
  // When you select a division
  divisionChange(newDivision) {
    this.departmentSelected = ''
    this.currentCareers = new Array
    this.valores = []
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
  }
  // Execute when minus button of career is clic
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
  }
 // Execute when plus button of career is clic
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
  }
  // Execute when minus button of department is clic
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
  }
 // Execute when plus button of department is clic
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
  }
}
