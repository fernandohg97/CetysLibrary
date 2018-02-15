import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { UserModel } from '../../models/user.model';
// import { EmployeeModel } from '../../models/employee.model';
// import { ExternalUserModel } from '../../models/externalUser.model';
// import { DepartmentModel } from '../../models/department.model';
// import { CareerModel } from '../../models/career.model';
// import { CubicleModel } from '../../models/cubicle.model';
// import { ReservationModel } from '../../models/reservation.model';
import { ElementType } from '../../enums/element-type.enum';

@Injectable()
export class AdminDataService {

  element: ElementType
  private elementSource = new BehaviorSubject<ElementType>(this.element)
  curentElement = this.elementSource.asObservable()

  id: string
  private idSource = new BehaviorSubject<string>(this.id)
  curentId = this.idSource.asObservable()

  // user: UserModel
  // private userSource = new BehaviorSubject<UserModel>(this.user)
  // currentUser = this.userSource.asObservable();
  //
  // career: CareerModel
  // private careerSource = new BehaviorSubject<CareerModel>(this.career)
  // currentCareer = this.careerSource.asObservable();
  //
  // external: ExternalUserModel
  // private externalSource = new BehaviorSubject<ExternalUserModel>(this.external)
  // currentExternal = this.externalSource.asObservable();
  //
  // employee: EmployeeModel
  // private employeeSource = new BehaviorSubject<EmployeeModel>(this.employee)
  // currentEmployee = this.employeeSource.asObservable();
  //
  // department: DepartmentModel
  // private departmentSource = new BehaviorSubject<DepartmentModel>(this.department)
  // currentDepartment = this.departmentSource.asObservable();
  //
  // cubicle: CubicleModel
  // private cubicleSource = new BehaviorSubject<CubicleModel>(this.cubicle)
  // currentCubicle = this.cubicleSource.asObservable();

  constructor() { }

  public getCurrentElement(): ElementType {
    return this.element
  }

  public changeElement(message: ElementType) {
    this.element = message
    this.elementSource.next(this.element)
  }

  public getCurrentId(): string {
    return this.id
  }

  public changeId(message: string) {
    this.id = message
    this.idSource.next(this.id)
  }

  // public getCurrentUser(): UserModel {
  //   return this.user
  // }
  //
  // public changeUser(message: UserModel) {
  //   this.user = message
  //   this.userSource.next(this.user)
  // }
  //
  // public getCurrentCareer(): CareerModel {
  //   return this.career
  // }
  //
  // public changeCareer(message: CareerModel) {
  //   this.career = message
  //   this.careerSource.next(this.career)
  // }
  //
  // public getCurrentDepartment(): DepartmentModel {
  //   return this.department
  // }
  //
  // public changeDepartment(message: DepartmentModel) {
  //   this.department = message
  //   this.departmentSource.next(this.department)
  // }
  //
  // public getCurrentCubicle(): CubicleModel {
  //   return this.cubicle
  // }
  //
  // public changeCubicle(message: CubicleModel) {
  //   this.cubicle = message
  //   this.cubicleSource.next(this.cubicle)
  // }
  //
  // public getCurrentExternalUser(): ExternalUserModel {
  //   return this.external
  // }
  //
  // public changeExternalUser(message: ExternalUserModel) {
  //   this.external = message
  //   this.externalSource.next(this.external)
  // }
  //
  // public getCurrentEmployee(): EmployeeModel {
  //   return this.employee
  // }
  //
  // public changeEmployee(message: EmployeeModel) {
  //   this.employee = message
  //   this.employeeSource.next(this.employee)
  // }

}
