import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CareerModel } from '../../models/career.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CareersService {

  private url = `${environment.baseUrl}/api/careers` // Endpoint to call api service

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<CareerModel[]> { // Get all careers
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as CareerModel[])
    .catch(CareersService.handleError)
  }

  getCount(): Promise<number> { // Get the maximun number of documents in database
    return this.http.get(`${this.url}/count`)
    .toPromise()
    .then()
    .catch(CareersService.handleError)
  }

  getByDivision(area: String): Promise<CareerModel[]> { // Get careers specifying the division (PREPARATORIA, INGENIERIA, ADMINISTRACION Y NEGOCIOS, ETC.)
    return this.http.get(`${this.url}/division`, {
      params: {
        area: area
      }
    })
    .toPromise()
    .then(res => res.json() as CareerModel[])
    .catch(CareersService.handleError)
  }

  getById(_id: String): Promise<CareerModel> { // Get career by id
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as CareerModel)
    .catch(CareersService.handleError)
  }

  getDownloadFile() { // Download local file with all careers
    return this.http.get(`${this.url}/download`).toPromise()
  }

  createCareersDownloadFile() { // Create local file with all careers from database
    return this.http.get(`${this.url}/file`).toPromise()
  }

  removeCareersFile() { // Remove local file with all careers
    return this.http.get(`${this.url}/remove`).toPromise()
  }

  create(newCareer: CareerModel) { // Create new career
    return this.http.post(this.url, newCareer)
    .map(res => res.json())
    .catch(err => CareersService.handleError(err))
  }

  createFile(newCareers: CareerModel[]) { // Create upload file careers
    return this.http.post(this.url, newCareers)
    .map(res => res.json())
    .catch(err => CareersService.handleError(err))
  }

  update(id: String, careerModel: CareerModel) { // Update specific career from database
    return this.http.put(`${this.url}/${id}`, careerModel).toPromise()
  }

  remove(id: String) { // Delete specific career from database
    console.log(id)
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() { // Delete all careers from database
    return this.http.delete(`${this.url}`).toPromise()
  }

}
