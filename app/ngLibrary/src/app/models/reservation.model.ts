import { UserDetailsModel } from './userDetails.model';
import { UserModel } from './user.model';

export class ReservationModel {
  _id: String;
  user: UserModel;
  cubicle: Number;
  reservationDate: Date = new Date();
  entryTime: Date = new Date();
  departureTime: Date;
  peopleQuantity: number = 0;
  usersDetails: Array<UserDetailsModel> = new Array();
  borrowedMaterial: String;
  enable: Boolean;
}
