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

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  updateReservation = new ReservationModel()
  newUser = new UserModel()
  registrationNumber: number
  reservationId: String
  currentCareers: Array<String>
  divisions: any
  quantityDepartment: number
  currentDate: string
  currentTime: string
  currentDepartureTime: string
  departments: String[] = new Array
  anyErrors: any
  departmentSelected: any
  selectedDivision: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationsService: ReservationsService,
    private usersQuantity: UsersQuantityService,
    private settingService: SettingsService,
    private usersService: UsersService,
    private careersService: CareersService,
    private departmentsService: DepartmentsService
  ) {
    this.quantityDepartment = 1
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
            let hour = entryTime.getHours()
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
            let departureHour = departureTime.getHours()
            let departureMinutes = departureTime.getMinutes() < 10 ? `0${departureTime.getMinutes()}` : departureTime.getMinutes()
            this.currentDepartureTime = `${departureHour}:${departureMinutes}`
            this.updateReservation = reservation
            this.registrationNumber = reservation.user['registrationNumber']
            console.log(this.updateReservation)
            // this.updateReservation.user = reservation.user._id
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
    this.updateReservation.entryTime = new Date(`${this.currentDate}, ${this.currentTime}`)
    this.updateReservation.departureTime = new Date(`${this.currentDate}, ${this.currentDepartureTime}`)
    this.updateReservation.reservationDate = new Date(`${this.currentDate}, ${this.currentTime}`)
    if (this.registrationNumber != this.updateReservation.user['registrationNumber']) {
      this.usersService.getByRegistrationNumber(this.registrationNumber).then(user => {
        this.updateReservation.user = user
      }).catch(err => {
        this.anyErrors = JSON.parse(err._body)
      })
    }
    this.reservationsService.update(this.reservationId, this.updateReservation)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl('/')
      },
      err => {
        this.anyErrors = JSON.parse(err._body)
    }
    )
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

  onSubmitQuantityDepartment() {
    let newDepartmentUser = new UserDepartmentModel(this.quantityDepartment, this.usersQuantity.getDepartmentSelected(), this.registrationNumber)
    this.updateReservation.usersDetails.push(newDepartmentUser)
    this.updateReservation.peopleQuantity += this.quantityDepartment
    console.log(this.updateReservation.usersDetails)
    this.quantityDepartment = 1
  }

  departmentChange(event) {
    console.log(event)
    this.usersQuantity.setDepartmentSelected(event)
    console.log(`Department selected: ${this.usersQuantity.getDepartmentSelected()}`)
  }

  divisionChange(newDivision) {
    console.log(newDivision.division)
    this.usersQuantity.setDivisionSelected(newDivision.division)
    this.careersService.getByDivision(newDivision.division).then(data => {
      if (data.length >= 1) {
        data.forEach(career => {
          this.currentCareers.push(career.careerCode)
        })
      } else {
        this.currentCareers.push('EXT')
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
              if (quantity > 0) {
                let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber)
                this.updateReservation.usersDetails.push(newDivisionUser)
              }

          }
        } else {
          this.updateReservation.usersDetails.forEach((carrera, index) => {
            if (career == carrera.career) {
                carrera.quantity-=1
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
      let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber)
      this.updateReservation.usersDetails.push(newDivisionUser)
    } else {
        if (this.usersQuantity.getCareer() != career) {
          let sigue = false
          this.updateReservation.usersDetails.forEach(carrera => {
            if (career == carrera.career) {
                carrera.quantity+=1
                sigue = true
            }
          })
          if (sigue == false) {
              this.usersQuantity.setCareer(career)
              let selectedCareer = career
              let quantity = this.usersQuantity.getUsersCounter() + 1
              let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber)
              this.updateReservation.usersDetails.push(newDivisionUser)
          }
        } else {
          if (this.updateReservation.usersDetails.length == 0) {
            let selectedCareer = career
            let quantity = this.usersQuantity.getUsersCounter() + 1
            let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber)
            this.updateReservation.usersDetails.push(newDivisionUser)
          } else {
            this.updateReservation.usersDetails.forEach(carrera => {
              if (career == carrera.career) {
                  carrera.quantity+=1
              }
            })
          }
        }
    }
    this.updateReservation.peopleQuantity+=1
    console.log(this.updateReservation.usersDetails)
  }



}
