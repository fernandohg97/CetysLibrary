import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { EmployeeModel } from '../../models/employee.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class EmployeesService {

  private url = `${environment.baseUrl}/api/employees` // Api endpoint to call database

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    // console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<EmployeeModel[]> { // Get all employees from database
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as EmployeeModel[])
    .catch(EmployeesService.handleError)
  }

  getCount(): Promise<number> { // Get the maximun number of documents in database
    return this.http.get(`${this.url}/count`)
    .toPromise()
    .then()
    .catch(EmployeesService.handleError)
  }

  getById(_id: String): Promise<EmployeeModel> { // Get employee by id
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as EmployeeModel)
    .catch(EmployeesService.handleError)
  }

  getDownloadFile() { // Download local file with all employees
    return this.http.get(`${this.url}/download`).toPromise()
  }

  createEmployeesDownloadFile() { // Create a local file with all employees from database
    return this.http.get(`${this.url}/file`).toPromise()
  }

  removeEmployeesFile() { // Remove local file with all employees
    return this.http.get(`${this.url}/remove`).toPromise()
  }

  create(newEmployee: EmployeeModel) { // Create new employee
    return this.http.post(this.url, newEmployee)
    .map(res => res.json())
    .catch(err => EmployeesService.handleError(err))
  }

  createFile(newEmployees: EmployeeModel[]) {
    return this.http.post(this.url, newEmployees)
    .map(res => res.json())
    .catch(err => EmployeesService.handleError(err))
  }

  update(id: String, employeeModel: EmployeeModel) { // Update specific employee from database
    return this.http.put(`${this.url}/${id}`, employeeModel).toPromise()
  }

  remove(id: String) { // Delete specific employee from database
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() { // Delete all employees from database
    return this.http.delete(`${this.url}`).toPromise()
  }

}
