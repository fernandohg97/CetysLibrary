import { Component, OnInit, Input, ViewChild, AfterContentInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ReservationsService } from '../../../services/reservations/reservations.service';
import { CubiclesService } from '../../../services/cubicles/cubicles.service';
import { SettingsService } from '../../../services/settings/settings.service';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { UsersQuantityService } from '../../../services/usersQuantity/users.quantity.service';
import { UsersService } from '../../../services/users/users.service';
import { ReservationModel } from '../../../models/reservation.model';
import { UserDepartmentModel } from '../../../models/userDetails.model';
import { UserDivisionModel } from '../../../models/userDetails.model';
import { UserModel } from '../../../models/user.model';
import { CareersService } from '../../../services/careers/careers.service';
import { DataReservationService } from '../../../services/dataReservation/data-reservation.service';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css']
})
export class ReservationCreateComponent implements OnInit {

  values: Array<any> = new Array
  newReservation = new ReservationModel()
  newUser = new UserModel()
  registrationNumber: number
  departureTime: string
  currentDate: string
  currentTime: string
  currentCareers: Array<String>
  currentDepartment: string
  currentUser: any
  quantityDepartment: number = 0
  divisions: any
  selectedDivision: any
  departments: String[] = new Array
  anyErrors: any
  departmentSelected: string
  departureTimeError: any
  called: Boolean
  departmentUser: String

  constructor(
    private dataReservationService: DataReservationService,
    private departmentsService: DepartmentsService,
    private usersService: UsersService,
    private usersQuantity: UsersQuantityService,
    private settingService: SettingsService,
    private cubiclesService: CubiclesService,
    private reservationsService: ReservationsService,
    private careersService: CareersService,
    private router: Router,
    private route: ActivatedRoute
  ){ this.called = false }

  // Execute when component initialize
  ngOnInit() {
    let hour = this.newReservation.entryTime.getHours().toString()
    let minutes = this.newReservation.entryTime.getMinutes()
    // Add '0' before the hour
    if (parseInt(hour) >= 0 && parseInt(hour) <= 9) {
      hour = '0' + hour
    }
    // Add '0' before minutes
    if (minutes >= 0 && minutes <= 9) {
      this.currentTime = `${hour}:0${minutes}`
    } else {
      this.currentTime = `${hour}:${minutes}`
    }

    let day = this.newReservation.reservationDate.getDate().toString()
    let month = this.newReservation.reservationDate.getMonth()+1
    let year = this.newReservation.reservationDate.getFullYear()
    // Add '0' before day
    if (parseInt(day) >= 1 && parseInt(day) <= 9) {
      day = '0' + day
    }
    // Add '0' before month
    if (month >= 1 && month <= 9) {
      this.currentDate = `${year}-0${month}-${day}`
    } else {
      this.currentDate = `${year}-${month}-${day}`
    }

    this.settingService.loadSchoolSettings().subscribe(res => { // Get the divisions data
      this.divisions = res
    })
    this.departmentsService.getAll().then(data => { // Get departments data
      data.forEach(department => {
        this.departments.push(department.departmentName) // Add departments name to departments array
      })
    })
    // Get cubicle by his id
    this.route.params.subscribe((params: Params) => {
      let cubicleNumberId = params['id']
      if (cubicleNumberId) {
        this.cubiclesService.getById(cubicleNumberId).then(cubicle => {
          this.newReservation.cubicle = cubicle.cubicleNumber
        })
      }
    })
  }
  // Create and save new reservation
  save() {
    this.newReservation.entryTime = new Date(`${this.currentDate} ${this.currentTime}`)
    this.newReservation.departureTime = new Date(`${this.currentDate} ${this.departureTime}`)
    this.newReservation.reservationDate = new Date(`${this.currentDate} ${this.currentTime}`)

    this.usersService.getByRegistrationNumber(this.registrationNumber).then(user => { // Get user by registration number input
      let student = JSON.parse(JSON.stringify(user)).usuario
      let employee = JSON.parse(JSON.stringify(user)).empleado
      if (student) { // In case is a student
        this.newReservation.user = student
      } else { // In case is an employee
        this.newReservation.employee = employee
      }
      this.reservationsService.create(this.newReservation) // Create data
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
  // In case you will create a reservation for external user
  reservateExternalUser() {
    this.called = true
  }
  // Validate if user exist in database
  searchUser() {
    this.anyErrors = ''
    this.usersService.getByRegistrationNumber(this.registrationNumber).then(data => { // get user bu his registration number
      this.currentUser = JSON.parse(JSON.stringify(data)).usuario || JSON.parse(JSON.stringify(data)).empleado // Set student or employee
      if (this.currentUser.hasOwnProperty('department')) { // In case it has department property
        this.departmentsService.getByNumber(this.currentUser.department).then(data => { // Get department by department number
          this.departmentUser = data.departmentName
        }).catch(err => {
          this.anyErrors = JSON.parse(err._body)
        })
      }
    }).catch(err => {
      this.currentUser = this.departmentUser = ''
      this.anyErrors = JSON.parse(err._body)
    })
  }
  // When you select a division
  divisionChange(newDivision) {
    this.departmentSelected = ''
    this.currentCareers = new Array
    this.values = []
    this.careersService.getByDivision(newDivision.division).then(data => { // Get careers by division
      if (data.length >= 1) { // In case data contains 1 or more elements
        data.forEach(career => {
          this.currentCareers.push(career.careerCode)
          this.values.push({
            career: career.careerCode,
            count: 0
          })
        })
      } else { // In case data is empty
        this.currentCareers.push('EXT')
        this.values.push({
          career: 'EXT',
          count: 0
        })
      }
    })
    this.usersQuantity.setDivisionSelected(newDivision.division) // Set the division input selected
  }
  // When you select a department
  departmentChange(event) {
    this.selectedDivision = {}
    let sigue: boolean = false
    this.currentCareers = []
    if (this.newReservation.usersDetails) { // In case the reservations has companions
      this.newReservation.usersDetails.forEach((e, index) => {
        if (event == e.department) {
          this.quantityDepartment = e.quantity
          sigue = true
        }
      })
    }
    if (!sigue) this.quantityDepartment = 0
    this.departmentSelected = event
    this.usersQuantity.setDepartmentSelected(event) // Set the department input selected
  }
  // Execute when minus button of career is clic
  // The users quantity service is using to
  // store the career and department that selects the user
  decrementCareer(career: string) {
    if (this.usersQuantity.getCareer() == null || undefined) { // In case the current career selected is null or undefined
      // dont do anything
    } else { // In case the current career selected returns a value
        if (this.usersQuantity.getCareer() != career) { // In case the previous career selected is different from the current selected career
          let sigue = false
          this.newReservation.usersDetails.forEach((carrera, index) => { // Each companions reservation career
            if (career == carrera.career) { // In case is the same, remove 1
                carrera.quantity-=1
                this.values.forEach(element => {
                  if (element.career == career) {
                    element.count = carrera.quantity // set the new count
                  }
                })
                if (carrera.quantity == 0) {
                  this.newReservation.usersDetails.splice(index, 1)
                }
                sigue = true
            }
          })
          if (sigue == false) { // In case is false
              this.usersQuantity.setCareer(career) // Set the new career
              let selectedCareer = career
              let quantity = this.usersQuantity.getUsersCounter() - 1 // Remove 1
              this.values.forEach(element => {
                if (element.career == career) { // In case is the same career selected to the previous one
                  element.count = quantity // Update quantity
                }
              })
              if (quantity > 0) { // In case quantity is higher than 0, create new division student companion
                let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber)
                this.newReservation.usersDetails.push(newDivisionUser)
              }
          }
        } else { // In case is not different the career selected to the previous one
          this.newReservation.usersDetails.forEach((carrera, index) => {
            if (career == carrera.career) { // In case the career selected is the same to one of the userDetails reservation
                carrera.quantity-=1 // Update quantity
                this.values.forEach(element => {
                  if (element.career == career) {
                    element.count = carrera.quantity // Update quantity
                  }
                })
                if (carrera.quantity == 0) { // In case quantity is 0
                  if (this.newReservation.usersDetails.length == 1) { // In case userDetails has length of 1
                    this.newReservation.usersDetails.splice(index, 1)
                  } else { // In case userDetails is higher than 1
                    this.usersQuantity.setCareer(this.newReservation.usersDetails[index-1].career) // Set career selected to the previos one
                    this.newReservation.usersDetails.splice(index, 1)
                  }
                }
            }
          })
        }
    }
    if (this.newReservation.peopleQuantity > 0) { // In case peopleQuantity is higher than 0
      this.newReservation.peopleQuantity-=1 // Minus 1 peopleQuantity property
    }
  }
 // Execute when plus button of career is clic
  incrementCareer(career: string) {
    if (this.usersQuantity.getCareer() == null || undefined) { // In case the current career selected is null or undefined
      this.usersQuantity.setCareer(career)
      let selectedCareer = career
      let quantity = this.usersQuantity.getUsersCounter() + 1
      this.values.forEach(element => {
        if (element.career == career) {
          element.count = quantity
        }
      })
      let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber)
      this.newReservation.usersDetails.push(newDivisionUser)
    } else { // In case the current career selected returns a value
        if (this.usersQuantity.getCareer() != career) { // In case the previous career selected is different from the current selected career
          let sigue = false
          this.newReservation.usersDetails.forEach(carrera => { // Each companions reservation career
            if (career == carrera.career) {  // In case is the same, remove 1
                carrera.quantity+=1 // Update quantity
                this.values.forEach(element => {
                  if (element.career == career) {
                    element.count = carrera.quantity // set the new count
                  }
                })
                sigue = true
            }
          })
          if (sigue == false) { // In case is false
              this.usersQuantity.setCareer(career) // Set the new career
              let selectedCareer = career
              let quantity = this.usersQuantity.getUsersCounter() + 1 // Remove 1
              this.values.forEach(element => {
                if (element.career == career) { // In case is the same career selected to the previous one
                  element.count = quantity // Update quantity
                }
              })
              // create new division student companion and add it to reservation user details property
              let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber)
              this.newReservation.usersDetails.push(newDivisionUser)
          }
        } else { // In case is not different the career selected to the previous one
          if (this.newReservation.usersDetails.length == 0) { // In case the reservation doesnt have companions
            let selectedCareer = career
            let quantity = this.usersQuantity.getUsersCounter() + 1 // Add 1 to users counter
            this.values.forEach(element => {
              if (element.career == career) { // In case the career selected is the same to one of the predefined careers
                element.count = quantity // set new count value
              }
            })
            // Create new student companion
            let newDivisionUser = new UserDivisionModel(quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber)
            this.newReservation.usersDetails.push(newDivisionUser)
          } else { // In case the reservation contains companions
            this.newReservation.usersDetails.forEach(carrera => {
              if (career == carrera.career) { // In case is the same career selected to the previous one
                  carrera.quantity+=1 // Update quantity
                  this.values.forEach(element => {
                    if (element.career == career) { // In case the career selected is the same to one of the predefined careers
                      element.count = carrera.quantity // set new count value
                    }
                  })
              }
            })
          }
        }
    }
    this.newReservation.peopleQuantity+=1 // Add 1 to peopleQuantity property
  }

  // Execute when minus button of department is clic
  decrementDepartment() {
    this.quantityDepartment -= 1 // Minus 1 to department
    this.newReservation.usersDetails.forEach((e, index) => {
      if (this.usersQuantity.getDepartmentSelected() == e.department) { // In case is the same department selected to the previous one
          e.quantity -= 1 // Update quantity
          if (e.quantity == 0) { // In case is 0
            this.newReservation.usersDetails.splice(index, 1) // Remove the department
          }
      }
    })
    if (this.newReservation.peopleQuantity > 0) { // In case peopleQuantity is higher than 0
      this.newReservation.peopleQuantity-=1 // Update quantity
    }
  }
  // Execute when plus button of department is clic
  incrementDepartment() {
    let exist = false
    this.quantityDepartment += 1 // PLus 1 to department
    this.newReservation.usersDetails.forEach((e, index) => {
      if (this.usersQuantity.getDepartmentSelected() == e.department) { // In case is the same department selected to the previous one
          e.quantity += 1 // Update quantity
          exist = true // Change boolean value
      }
    })
    if (!exist) { // In case exist variable is false, create new department user companion
      let newDepartmentUser = new UserDepartmentModel(this.quantityDepartment, this.usersQuantity.getDepartmentSelected(), this.registrationNumber)
      this.newReservation.usersDetails.push(newDepartmentUser)
    }
    this.newReservation.peopleQuantity += 1 // Add 1 to peopleQuantity property
  }
}
