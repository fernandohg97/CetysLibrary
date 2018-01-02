import { Component, OnInit } from '@angular/core';
import { CareersService } from '../../../services/careers/careers.service';
import { CareerModel } from '../../../models/career.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SettingsService } from '../../../services/settings/settings.service';

@Component({
  selector: 'app-admin-careers-update',
  templateUrl: './admin-careers-update.component.html',
  styleUrls: ['./admin-careers-update.component.css'],
  providers: [SettingsService, CareersService]
})
export class AdminCareersUpdateComponent implements OnInit {

  currentCareer: CareerModel
  divisions: any
  divisionSelected: String

  constructor(private careersService: CareersService, private router: Router, private route: ActivatedRoute, private settingService: SettingsService) {
  }

  ngOnInit() {
    this.settingService.loadSchoolSettings().subscribe(res => {
      this.divisions = res
      console.log(this.divisions)
    })
    this.route.params.subscribe((params: Params) => {
      let careerId = params['id'] //
      console.log(`Id de la carrera: ${careerId}`)
      if (careerId) {
        this.careersService.getById(careerId).then(career => {
          console.log(career)
          this.currentCareer = career
          this.divisionSelected = career.area
          console.log(this.currentCareer.active)
        })
      }
    })
  }

  isActiveCareer(event: any) {
    console.log(event.target.value)
    this.currentCareer.active = event.target.value
  }

  isNotActiveCareer(event: any) {
    console.log(event.target.value)
    this.currentCareer.active = event.target.value
  }
  // selectChangeHandler(event: any) {
  //   this.divisionSelected = event.target.value
  //   console.log(this.divisionSelected)
  // }
  update() {
    this.careersService.update(this.currentCareer._id, this.currentCareer).then(response => {
      console.log(response)
      if (response.status == 200 || response.status == 204) {
        this.router.navigateByUrl('/admin-site')
      }
    }).catch(err => console.log(`Error ${err}`))
  }

}
