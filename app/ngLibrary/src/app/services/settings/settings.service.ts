import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SettingsService {

  constructor(private http: Http) { }

  loadSchoolSettings() {
    let url
    url = 'assets/resources/settings/school.division.json'
    return this.http.get(url).map((res: Response) => res.json())
  }

}
