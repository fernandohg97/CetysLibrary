import { Injectable } from '@angular/core';

@Injectable()
export class UsersQuantityService {

  private divisionSelected: string
  private departmentSelected: string
  private usersCounter: number = 0
  private count: number = 0
  private userCareer: string
  private departmentQuantity: number

  constructor() {
  }

  setDepartmentQuantity(departmentQuantity: number) {
    this.departmentQuantity = departmentQuantity
  }

  getDepartmentQuantity() {
    return this.departmentQuantity
  }

  setDivisionSelected(divisionSelected: string) {
    this.divisionSelected = divisionSelected
  }

  getDivisionSelected() {
    return this.divisionSelected
  }

  setDepartmentSelected(departmentSelected: string) {
    this.departmentSelected = departmentSelected
  }

  getDepartmentSelected() {
    return this.departmentSelected
  }

  increment() {
    return this.count+=1
  }

  decrement() {
    return this.count-=1
  }

  setUsersCounter(usersCounter: number) {
    this.usersCounter = usersCounter
  }

  getUsersCounter() {
    return this.usersCounter
  }

  setCareer(career: string) {
    this.userCareer = career
  }

  getCareer() {
    return this.userCareer
  }

}
