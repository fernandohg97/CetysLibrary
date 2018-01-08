import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserDetailsModel } from '../../models/userDetails.model';
import { UserModel } from '../../models/user.model';

@Injectable()
export class DataReservationService {

  doneReservations: UserDetailsModel
  private reservationsSource = new BehaviorSubject<UserDetailsModel>(this.doneReservations);
  currentResservationsDone = this.reservationsSource.asObservable();

  user: UserModel
  private userSource = new BehaviorSubject<UserModel>(this.user);
  currentUser = this.userSource.asObservable();

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

}
