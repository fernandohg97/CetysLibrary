import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SettingsService {

  constructor(private http: Http) { }

  loadSchoolSettings() {
    let url // local variable
    url = 'assets/resources/settings/school.division.json' // Path file
    return this.http.get(url).map((res: Response) => res.json()) // Return path file in json format to manipulate
  }

}
