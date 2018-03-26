// User details model
// This class is a property of reservation model
export class UserDetailsModel {
  quantity: number = 0;
  division: string;
  career: string;
  registrationNumber: number;
  userCode: string;
  department: string;
}
// UserDepartment model that extends from user details model
// This class is when the companion is an employee,
// so the properties are different from user division model
export class UserDepartmentModel extends UserDetailsModel {
  constructor (quantity: number, department: string, registrationNumber?: number, userCode?: string) {
    super()
    this.quantity = quantity
    this.department = department
    this.registrationNumber = registrationNumber
    this.userCode = userCode
  }
}
// UserDivision model that extends from user details model
// This class is when the companion is a student,
// so the properties are different from user department model
export class UserDivisionModel extends UserDetailsModel {
  constructor (quantity: number, division: string, career: string, registrationNumber?: number, userCode?: string) {
    super()
    this.quantity = quantity
    this.division = division
    this.career = career
    this.registrationNumber = registrationNumber
    this.userCode = userCode
  }
}
