import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CareerModel } from '../../models/career.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CareersService {

  private url = `${environment.baseUrl}/api/careers`

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<CareerModel[]> {
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as CareerModel[])
    .catch(CareersService.handleError)
  }

  getByDivision(area: String): Promise<CareerModel[]> {
    return this.http.get(`${this.url}/division`, {
      params: {
        area: area
      }
    })
    .toPromise()
    .then(res => res.json() as CareerModel[])
    .catch(CareersService.handleError)
  }

  getById(_id: String): Promise<CareerModel> {
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as CareerModel)
    .catch(CareersService.handleError)
  }

  getDownloadFile() {
    return this.http.get(`${this.url}/download`).toPromise()
  }

  createCareersDownloadFile() {
    return this.http.get(`${this.url}/file`).toPromise()
  }

  removeCareersFile() {
    return this.http.get(`${this.url}/remove`).toPromise()
  }

  create(newCareer: CareerModel) {
    return this.http.post(this.url, newCareer)
    .map(res => res.json())
    .catch(err => CareersService.handleError(err))
  }

  createFile(newCareers: CareerModel[]) {
    return this.http.post(this.url, newCareers)
    .map(res => res.json())
    .catch(err => CareersService.handleError(err))
  }

  update(id: String, careerModel: CareerModel) {
    return this.http.put(`${this.url}/${id}`, careerModel).toPromise()
  }

  remove(id: String) {
    console.log(id)
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() {
    return this.http.delete(`${this.url}`).toPromise()
  }

}
