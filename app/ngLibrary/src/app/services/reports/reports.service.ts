import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ReportsService {

  private url = `${environment.baseUrl}/api/reports` // Api endpoint to call database

  constructor(private http: Http) { }

  private static handleError(error: any): Promise<any> {
    // console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  // Get reservation reports by division
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
  // Get reservation reports by department
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
  // Get reservation reports by career name companions
  getByCompanions(startDate: any, endDate: any): Promise<any> {
    return this.http.get(`${this.url}CompanionsCareer`, {
      params: {
        start: startDate,
        end: endDate
      },
    })
    .toPromise()
    .then(res => res.json())
    .catch(ReportsService.handleError)
  }
  // Get reservation reports by career
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
  // Get reservation reports by external user
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
  // Get reservation reports by cubicle
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
  // Get reservation reports by day
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
