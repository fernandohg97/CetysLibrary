import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CompanionModel } from '../../models/companion.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CompanionsService {

  private url = `${environment.baseUrl}/api/companions`

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    // console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<CompanionModel[]> { // Get all companions
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as CompanionModel[])
    .catch(CompanionsService.handleError)
  }

  getCount(): Promise<number> { // Get the maximun number of documents in database
    return this.http.get(`${this.url}/count`)
    .toPromise()
    .then()
    .catch(CompanionsService.handleError)
  }

  getById(_id: String): Promise<CompanionModel> { // Get companion by id
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as CompanionModel)
    .catch(CompanionsService.handleError)
  }

  getByReservation(reservation: String): Promise<CompanionModel> {
    return this.http.get(`${this.url}/reservation/${reservation}`)
    .toPromise()
    .then(res => res.json() as CompanionModel)
    .catch(CompanionsService.handleError)
  }

  // getDownloadFile() { // Download local file with all careers
  //   return this.http.get(`${this.url}/download`).toPromise()
  // }
  //
  // createCareersDownloadFile() { // Create local file with all careers from database
  //   return this.http.get(`${this.url}/file`).toPromise()
  // }
  //
  // removeCareersFile() { // Remove local file with all careers
  //   return this.http.get(`${this.url}/remove`).toPromise()
  // }

  create(newCompanion: CompanionModel) { // Create one new companion
    return this.http.post(this.url, newCompanion)
    .map(res => res.json())
    .catch(err => CompanionsService.handleError(err))
  }

  createMany(newCompanions: CompanionModel[]) { // Create many companions
    return this.http.post(this.url, newCompanions)
    .map(res => res.json())
    .catch(err => CompanionsService.handleError(err))
  }

  update(id: String, companionModel: CompanionModel) { // Update specific companion from database
    return this.http.put(`${this.url}/${id}`, companionModel).toPromise()
  }

  remove(id: String) { // Delete specific companion from database
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() { // Delete all companions from database
    return this.http.delete(`${this.url}`).toPromise()
  }

}
