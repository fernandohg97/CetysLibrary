import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';
import { CubicleModel } from '../../models/cubicle.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CubiclesService {

  private url = `${environment.baseUrl}/api/cubicles` // Api endpoint to call database

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    // console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<CubicleModel[]> { // Get all cubicles from database
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as CubicleModel[])
    .catch(CubiclesService.handleError)
  }

  getCount(): Promise<number> { // Get the maximun number of documents in database
    return this.http.get(`${this.url}/count`)
    .toPromise()
    .then()
    .catch(CubiclesService.handleError)
  }

  getById(_id: String): Promise<CubicleModel> { // Get cubicle by id from database
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as CubicleModel)
    .catch(CubiclesService.handleError)
  }

  getDownloadFile() { // Download local file with all cubicles
    return this.http.get(`${this.url}/download`).toPromise()
  }

  createCubiclesDownloadFile() { // Create local file with all cubicles from database
    return this.http.get(`${this.url}/file`).toPromise()
  }

  removeCubiclesFile() { // Remove local file with all cubicles
    return this.http.get(`${this.url}/remove`).toPromise()
  }

  create(newCubicle: CubicleModel) { // Create new cubicle
    return this.http.post(this.url, newCubicle)
    .map(res => res.json())
    .catch(err => CubiclesService.handleError(err))
  }

  createFile(newCubicles: CubicleModel[]) { // Create upload file cubicles
    return this.http.post(this.url, newCubicles)
    .map(res => res.json())
    .catch(err => CubiclesService.handleError(err))
  }

  update(id: String, cubicleModel: CubicleModel) { // Update specific cubicle from database
    return this.http.put(`${this.url}/${id}`, cubicleModel).toPromise()
  }

  remove(id: String) { // Delete specific cubicle from database
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() { // Delete all careers from database
    return this.http.delete(`${this.url}`).toPromise()
  }
}
