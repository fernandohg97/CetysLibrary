import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserDetailsModel } from '../../models/userDetails.model';
import { UserModel } from '../../models/user.model';
import { EmployeeModel } from '../../models/employee.model';

@Injectable()
export class DataReservationService {

  doneReservations: UserDetailsModel
  private reservationsSource = new BehaviorSubject<UserDetailsModel>(this.doneReservations);
  currentResservationsDone = this.reservationsSource.asObservable();

  user: UserModel
  private userSource = new BehaviorSubject<UserModel>(this.user);
  currentUser = this.userSource.asObservable();

  employee: EmployeeModel
  private employeeSource = new BehaviorSubject<EmployeeModel>(this.employee)
  currentEmployee = this.employeeSource.asObservable();

  constructor() { }

  public getCurrentReservations(): UserDetailsModel {
    return this.doneReservations
  }

  public addReservationsDetails(message: UserDetailsModel) {
    this.doneReservations = message
    this.reservationsSource.next(this.doneReservations)
  }

  public getCurrentUser(): UserModel {
    return this.user
  }

  public changeUser(message: UserModel) {
    this.user = message
    this.userSource.next(this.user)
  }

  public getCurrentEmployee(): EmployeeModel {
    return this.employee
  }

  public changeEmployee(message: EmployeeModel) {
    this.employee = message
    this.employeeSource.next(this.employee)
  }

}
