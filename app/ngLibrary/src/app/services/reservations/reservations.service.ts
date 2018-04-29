import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ReservationModel } from '../../models/reservation.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ReservationsService {

  private url = `${environment.baseUrl}/api/reservations` // Api endpoint to call database

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    // console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<ReservationModel[]> { // Get all reservations from database
    return this.http.get(`${this.url}`)
    .toPromise()
    .then(res => res.json() as ReservationModel[])
    .catch(ReservationsService.handleError)
  }

  getCount(): Promise<number> { // Get the maximun number of documents in database
    return this.http.get(`${this.url}/count`)
    .toPromise()
    .then()
    .catch(ReservationsService.handleError)
  }

  getById(_id: String): Promise<ReservationModel> { // Get reservation by id
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as ReservationModel)
    .catch(ReservationsService.handleError)
  }

  getByCubicle(cubicle: String): Promise<ReservationModel[]> { // Get reservations by cubicle number
    return this.http.get(`${this.url}/cubicle/${cubicle}`)
    .toPromise()
    .then(res => res.json() as ReservationModel[])
    .catch(ReservationsService.handleError)
  }

  getDownloadFile() { // Download local file with all reservations
    return this.http.get(`${this.url}/download`).toPromise()
  }

  createReservationDownloadFile() { //  Create local file with all reservations from database
    return this.http.get(`${this.url}/file`).toPromise()
  }

  removeReservationFile() { // Remove local file with all reservations
    return this.http.get(`${this.url}/remove`).toPromise()
  }

  create(newReservation: ReservationModel) { // Create new reservation
    return this.http.post(this.url, newReservation)
    .map(response => response.json())
    .catch(err => ReservationsService.handleError(err))
  }

  update(id: String, reservationModel: ReservationModel) { // Update specific reservation from database
    return this.http.put(`${this.url}/${id}`, reservationModel).toPromise()
  }

  remove(id: String) { // Delete specific reservation from database
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() { // Delete all reservations from database
    return this.http.delete(`${this.url}`).toPromise()
  }

}
