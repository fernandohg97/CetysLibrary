import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { EmployeeModel } from '../../models/employee.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class EmployeesService {

  private url = `${environment.baseUrl}/api/employees`

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<EmployeeModel[]> {
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as EmployeeModel[])
    .catch(EmployeesService.handleError)
  }

  getCount(): Promise<number> {
    return this.http.get(`${this.url}/count`)
    .toPromise()
    .then()
    .catch(EmployeesService.handleError)
  }

  getById(_id: String): Promise<EmployeeModel> {
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as EmployeeModel)
    .catch(EmployeesService.handleError)
  }

  getDownloadFile() {
    return this.http.get(`${this.url}/download`).toPromise()
  }

  createEmployeesDownloadFile() {
    return this.http.get(`${this.url}/file`).toPromise()
  }

  removeEmployeesFile() {
    return this.http.get(`${this.url}/remove`).toPromise()
  }

  create(newEmployee: EmployeeModel) {
    return this.http.post(this.url, newEmployee)
    .map(res => res.json())
    .catch(err => EmployeesService.handleError(err))
  }

  createFile(newEmployees: EmployeeModel[]) {
    return this.http.post(this.url, newEmployees)
    .map(res => res.json())
    .catch(err => EmployeesService.handleError(err))
  }

  update(id: String, employeeModel: EmployeeModel) {
    return this.http.put(`${this.url}/${id}`, employeeModel).toPromise()
  }

  remove(id: String) {
    console.log(id)
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() {
    return this.http.delete(`${this.url}`).toPromise()
  }

}
