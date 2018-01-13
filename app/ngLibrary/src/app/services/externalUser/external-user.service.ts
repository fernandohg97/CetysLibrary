import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ExternalUserModel } from '../../models/externalUser.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ExternalUserService {

  private url = `${environment.baseUrl}/api/externalUsers`

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<ExternalUserModel[]> {
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as ExternalUserModel[])
    .catch(ExternalUserService.handleError)
  }

  getById(_id: String): Promise<ExternalUserModel> {
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as ExternalUserModel)
    .catch(ExternalUserService.handleError)
  }

  create(newExternalUser: ExternalUserModel) {
    return this.http.post(this.url, newExternalUser)
    .map(res => res.json())
    .catch(err => ExternalUserService.handleError(err))
  }

  createFile(newExternalUsers: ExternalUserModel[]) {
    return this.http.post(this.url, newExternalUsers)
    .map(res => res.json())
    .catch(err => ExternalUserService.handleError(err))
  }

  update(id: String, externalUserModel: ExternalUserModel) {
    return this.http.put(`${this.url}/${id}`, externalUserModel).toPromise()
  }

  remove(id: String) {
    console.log(id)
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

}
