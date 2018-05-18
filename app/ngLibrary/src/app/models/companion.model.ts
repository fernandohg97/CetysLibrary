export class CompanionModel {
  id: String
  reservationDate: Date;
  quantity: number;
  registrationNumber: number;
  userCode: String;
  division: String;
  career: String;
  department: String;
  constructor (reservationDate: Date, quantity: number, registrationNumber?: number, userCode?: String, division?: String, career?: String, department?: String) {
    this.reservationDate = reservationDate;
    this.quantity = quantity;
    this.registrationNumber = registrationNumber;
    this.userCode = userCode;
    this.division = division;
    this.career = career;
    this.department = department;
  }
}
