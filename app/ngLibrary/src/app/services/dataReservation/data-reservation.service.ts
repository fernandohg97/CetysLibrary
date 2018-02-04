import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserDetailsModel } from '../../models/userDetails.model';
import { UserModel } from '../../models/user.model';
import { EmployeeModel } from '../../models/employee.model';
import { ExternalUserModel } from '../../models/externalUser.model';
import { AdminSection } from '../../enums/admin-section.enum';

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

  external: ExternalUserModel
  private externalSource = new BehaviorSubject<ExternalUserModel>(this.external)
  currentExternal = this.externalSource.asObservable();

  borrowedMaterial: String
  private borrowedMaterialSource = new BehaviorSubject<String>(this.borrowedMaterial)
  currentBorrowedMaterial = this.borrowedMaterialSource.asObservable();

  adminSelected: AdminSection
  private adminSelectedSource = new BehaviorSubject<AdminSection>(this.adminSelected)
  currentAdminSelected = this.adminSelectedSource.asObservable();

  constructor() { }

  public getAdminSelected(): AdminSection {
    return this.adminSelected
  }

  public changeAdminSelected(message: AdminSection) {
    this.adminSelected = message
    this.adminSelectedSource.next(this.adminSelected)
  }

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

  public getCurrentExternalUser(): ExternalUserModel {
    return this.external
  }

  public changeExternalUser(message: ExternalUserModel) {
    this.external = message
    this.externalSource.next(this.external)
  }

  public getCurrentBorrowedMaterial(): String {
    return this.borrowedMaterial
  }

  public changeBorrowedMaterial(message: String) {
    this.borrowedMaterial = message
    this.borrowedMaterialSource.next(this.borrowedMaterial)
  }

}
