import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
// import 'rxjs/Rx';


@Injectable()
export class UsersService {

  private url = `${environment.baseUrl}/api/users`

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<UserModel[]> {
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as UserModel[])
    .catch(UsersService.handleError)
  }

  getRecent(): Promise<UserModel[]> {
    return this.http.get(`${this.url}/recent`)
    .toPromise()
    .then(res => res.json() as UserModel[])
    .catch(UsersService.handleError)
  }

  getById(_id: String): Promise<UserModel> {
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as UserModel)
    .catch(UsersService.handleError)
  }

  getByRegistrationNumber(registrationNumber: number): Promise<UserModel> {
    return this.http.get(`${this.url}/registrationNumber/${registrationNumber}`)
    .toPromise()
    .then(res => res.json() as UserModel)
    .catch(UsersService.handleError)
  }

  getDownloadFile() {
    return this.http.get(`${this.url}/download`).toPromise()
  }

  createUsersDownloadFile() {
    return this.http.get(`${this.url}/file`).toPromise()
  }

  removeUsersFile() {
    return this.http.get(`${this.url}/remove`).toPromise()
  }

  create(newUser: UserModel) {
    return this.http.post(this.url, newUser)
    .map(res => res.json())
    .catch(err => UsersService.handleError(err))
  }

  createFile(newUsers: UserModel[]) {
    return this.http.post(this.url, newUsers)
    .map(res => res.json())
    .catch(err => UsersService.handleError(err))
  }

  update(id: String, userModel: UserModel) {
    return this.http.put(`${this.url}/${id}`, userModel).toPromise()
  }

  remove(id: String) {
    console.log(id)
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() {
    return this.http.delete(`${this.url}`).toPromise()
  }

}
