import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
// import 'rxjs/Rx';


@Injectable()
export class UsersService {

  private url = `${environment.baseUrl}/api/users` // Api endpint to call database

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<UserModel[]> { // Get all users (students) from database
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as UserModel[])
    .catch(UsersService.handleError)
  }

  getCount(): Promise<number> { // Get the maximun number of documents in database
    return this.http.get(`${this.url}/count`)
    .toPromise()
    .then()
    .catch(UsersService.handleError)
  }

  getRecent(): Promise<UserModel[]> { // Get last 100 users (students)
    return this.http.get(`${this.url}/recent`)
    .toPromise()
    .then(res => res.json() as UserModel[])
    .catch(UsersService.handleError)
  }

  getById(_id: String): Promise<UserModel> { // Get user (student) by id
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as UserModel)
    .catch(UsersService.handleError)
  }

  getByRegistrationNumber(registrationNumber: number): Promise<UserModel> { // Get user (student) by registrationNumber (matricula)
    return this.http.get(`${this.url}/registrationNumber/${registrationNumber}`)
    .toPromise()
    .then(res => res.json() as UserModel)
    .catch(UsersService.handleError)
  }

  getDownloadFile() { // Download local file with all users (students)
    return this.http.get(`${this.url}/download`).toPromise()
  }

  createUsersDownloadFile() { //  Create local file with all users (students) from database
    return this.http.get(`${this.url}/file`).toPromise()
  }

  removeUsersFile() { // Remove local file with all users (students)
    return this.http.get(`${this.url}/remove`).toPromise()
  }

  create(newUser: UserModel) { // Create new user (student)
    return this.http.post(this.url, newUser)
    .map(res => res.json())
    .catch(err => UsersService.handleError(err))
  }

  createFile(newUsers: UserModel[]) { // Create upload file users
    return this.http.post(this.url, newUsers)
    .map(res => res.json())
    .catch(err => UsersService.handleError(err))
  }

  update(id: String, userModel: UserModel) {   // Update specific user (student)
    return this.http.put(`${this.url}/${id}`, userModel).toPromise()
  }

  remove(id: String) { // Delete specific user
    console.log(id)
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() { // Delete all users (students)
    return this.http.delete(`${this.url}`).toPromise()
  }

}
