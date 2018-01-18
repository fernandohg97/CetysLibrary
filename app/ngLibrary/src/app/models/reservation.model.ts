import { UserDetailsModel } from './userDetails.model';
import { UserModel } from './user.model';
import { EmployeeModel } from './employee.model';
import { ExternalUserModel } from './externalUser.model';

export class ReservationModel {
  _id: String;
  user: UserModel;
  employee: EmployeeModel;
  externalUser: ExternalUserModel;
  cubicle: Number;
  reservationDate: Date = new Date();
  entryTime: Date = new Date();
  departureTime: Date;
  peopleQuantity: number = 0;
  usersDetails: Array<UserDetailsModel> = new Array();
  borrowedMaterial: String;
  enable: Boolean;
}
