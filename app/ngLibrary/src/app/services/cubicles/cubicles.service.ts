import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';
import { CubicleModel } from '../../models/cubicle.model';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CubiclesService {

  private url = `${environment.baseUrl}/api/cubicles`

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    // console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAll(): Promise<CubicleModel[]> {
    return this.http.get(this.url)
    .toPromise()
    .then(res => res.json() as CubicleModel[])
    .catch(CubiclesService.handleError)
  }

  getById(_id: String): Promise<CubicleModel> {
    return this.http.get(`${this.url}/${_id}`)
    .toPromise()
    .then(res => res.json() as CubicleModel)
    .catch(CubiclesService.handleError)
  }

  getDownloadFile() {
    return this.http.get(`${this.url}/download`).toPromise()
  }

  createCubiclesDownloadFile() {
    return this.http.get(`${this.url}/file`).toPromise()
  }

  removeCubiclesFile() {
    return this.http.get(`${this.url}/remove`).toPromise()
  }

  create(newCubicle: CubicleModel) {
    return this.http.post(this.url, newCubicle)
    .map(res => res.json())
    .catch(err => CubiclesService.handleError(err))
  }

  createFile(newCubicles: CubicleModel[]) {
    return this.http.post(this.url, newCubicles)
    .map(res => res.json())
    .catch(err => CubiclesService.handleError(err))
  }

  update(id: String, cubicleModel: CubicleModel) {
    return this.http.put(`${this.url}/${id}`, cubicleModel).toPromise()
  }

  remove(id: String) {
    return this.http.delete(`${this.url}/${id}`).toPromise()
  }

  removeAll() {
    return this.http.delete(`${this.url}`).toPromise()
  }
}
