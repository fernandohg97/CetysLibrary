export class UserDetailsModel {
  quantity: number = 0;
  division: string;
  career: string;
  registrationNumber: number;
  department: string;
}
export class UserDepartmentModel extends UserDetailsModel {
  constructor (quantity: number, department: string, registrationNumber: number) {
    super()
    this.quantity = quantity
    this.department = department
    this.registrationNumber = registrationNumber
  }
}
export class UserDivisionModel extends UserDetailsModel {
  constructor (quantity: number, division: string, career: string, registrationNumber: number) {
    super()
    this.quantity = quantity
    this.division = division
    this.career = career
    this.registrationNumber = registrationNumber
  }
}
