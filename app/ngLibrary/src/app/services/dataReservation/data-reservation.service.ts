import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserDetailsModel } from '../../models/userDetails.model';

@Injectable()
export class DataReservationService {

  doneReservations: UserDetailsModel
  private reservationsSource = new BehaviorSubject<UserDetailsModel>(this.doneReservations);
  currentResservationsDone = this.reservationsSource.asObservable();

  constructor() { }

  public getCurrentReservations(): UserDetailsModel {
    return this.doneReservations
  }

  public addReservationsDetails(message: UserDetailsModel) {
    this.doneReservations = message
    this.reservationsSource.next(this.doneReservations)
  }

}
