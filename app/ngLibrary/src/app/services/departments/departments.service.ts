import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { DepartmentModel } from '../../models/department.model';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class DepartmentsService {

  private url = `${environment.baseUrl}/api/departments` // Api endopoint to call database

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    // console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<DepartmentModel[]> { // Get all departments from database
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as DepartmentModel[])
    .catch(DepartmentsService.handleError)
  }

  getCount(): Promise<number> { // Get the maximun number of documents in database
    return this.http.get(`${this.url}/count`)
    .toPromise()
    .then()
    .catch(DepartmentsService.handleError)
  }

  getById(_id: String): Promise<DepartmentModel> { // Get department by id
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as DepartmentModel)
    .catch(DepartmentsService.handleError)
  }

  getByNumber(number: String): Promise<DepartmentModel> { // Get department from database by a specific department number
    return this.http.get(`${this.url}/number/${number}`)
    .toPromise()
    .then(res => res.json() as DepartmentModel)
    .catch(DepartmentsService.handleError)
  }

  getDownloadFile() { // Download local file with all departments
    return this.http.get(`${this.url}/download`).toPromise()
  }

  createDepartmentsDownloadFile() { // Create local file with all departments from database
    return this.http.get(`${this.url}/file`).toPromise()
  }

  removeDepartmentsFile() { // Remove local file with all departments
    return this.http.get(`${this.url}/remove`).toPromise()
  }

  create(newDepartment: DepartmentModel) { // Create new department
    return this.http.post(this.url, newDepartment)
    .map(res => res.json())
    .catch(err => DepartmentsService.handleError(err))
  }

  createFile(newDepartments: DepartmentModel[]) { // Create upload file departments
    return this.http.post(this.url, newDepartments)
    .map(res => res.json())
    .catch(err => DepartmentsService.handleError(err))
  }

  update(id: String, departmentModel: DepartmentModel) { // Update specific department
    return this.http.put(`${this.url}/${id}`, departmentModel).toPromise()
  }

  remove(id: String) { // Remove department by id
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() { // Remove all departments
    return this.http.delete(`${this.url}`).toPromise()
  }

}
