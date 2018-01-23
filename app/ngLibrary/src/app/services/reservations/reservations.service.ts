import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ReservationModel } from '../../models/reservation.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ReservationsService {

  private url = `${environment.baseUrl}/api/reservations`

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<ReservationModel[]> {
    return this.http.get(`${this.url}`)
    .toPromise()
    .then(res => res.json() as ReservationModel[])
    .catch(ReservationsService.handleError)
  }

  getCount(): Promise<number> {
    return this.http.get(`${this.url}/count`)
    .toPromise()
    .then()
    .catch(ReservationsService.handleError)
  }

  getById(_id: String): Promise<ReservationModel> {
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as ReservationModel)
    .catch(ReservationsService.handleError)
  }

  getByCubicle(cubicle: String): Promise<ReservationModel[]> {
    return this.http.get(`${this.url}/cubicle/${cubicle}`)
    .toPromise()
    .then(res => res.json() as ReservationModel[])
    .catch(ReservationsService.handleError)
  }

  create(newReservation: ReservationModel) {
    return this.http.post(this.url, newReservation)
    .map(response => response.json())
    .catch(err => ReservationsService.handleError(err))
  }

  update(id: String, reservationModel: ReservationModel) {
    return this.http.put(`${this.url}/${id}`, reservationModel).toPromise()
  }

  remove(id: String) {
    console.log(id)
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

}
