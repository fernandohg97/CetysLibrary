import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ReportsService {

  private url = `${environment.baseUrl}/api/reports`

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getByDivision(startDate: any, endDate: any): Promise<any> {
    return this.http.get(`${this.url}Division`, {
      params: {
        start: startDate,
        end: endDate
      },
    })
    .toPromise()
    .then(res => res.json())
    .catch(ReportsService.handleError)
  }

  getByDepartment(startDate: any, endDate: any): Promise<any> {
    return this.http.get(`${this.url}Department`, {
      params: {
        start: startDate,
        end: endDate
      },
    })
    .toPromise()
    .then(res => res.json())
    .catch(ReportsService.handleError)
  }

  getByCareer(startDate: any, endDate: any): Promise<any> {
    return this.http.get(`${this.url}Career`, {
      params: {
        start: startDate,
        end: endDate
      },
    })
    .toPromise()
    .then(res => res.json())
    .catch(ReportsService.handleError)
  }

  getByExternal(startDate: any, endDate: any): Promise<any> {
    return this.http.get(`${this.url}External`, {
      params: {
        start: startDate,
        end: endDate
      },
    })
    .toPromise()
    .then(res => res.json())
    .catch(ReportsService.handleError)
  }

  getByCubicle(startDate: any, endDate: any): Promise<any> {
    return this.http.get(`${this.url}Cubicle`, {
      params: {
        start: startDate,
        end: endDate
      },
    })
    .toPromise()
    .then(res => res.json())
    .catch(ReportsService.handleError)
  }

  getByDay(startDate: any, endDate: any): Promise<any> {
    return this.http.get(`${this.url}Day`, {
      params: {
        start: startDate,
        end: endDate
      },
    })
    .toPromise()
    .then(res => res.json())
    .catch(ReportsService.handleError)
  }

}
