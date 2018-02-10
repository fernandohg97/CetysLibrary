import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { SettingsService } from '../../../services/settings/settings.service';
import { UserModel } from '../../../models/user.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CareerModel } from '../../../models/career.model';
import { CareersService } from '../../../services/careers/careers.service';

@Component({
  selector: 'app-admin-users-update',
  templateUrl: './admin-users-update.component.html',
  styleUrls: ['./admin-users-update.component.css']
})
export class AdminUsersUpdateComponent implements OnInit {

  currentUser: UserModel
  divisions: any
  divisionSelected: any
  careers: String[]

  constructor(
    private settingService:SettingsService,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private careersService: CareersService
  ) { }

  ngOnInit() {
    this.settingService.loadSchoolSettings().subscribe(res => {
      this.divisions = res
    })
    this.route.params.subscribe((params: Params) => {
      let userId = params['id'] //
      if (userId) {
        this.usersService.getById(userId).then(user => {
          if (user) {
            this.currentUser = user
            this.divisionSelected = user.division
          }
        })
      }
    })
  }

  divisionChange(event: any) {
    this.careers = new Array
    this.careersService.getByDivision(event.division).then(data => {
        data.forEach(career => {
          this.careers.push(career.careerCode)
        })
    }).catch(err => console.log(`Error ${err}`))

    switch(event.division) {
      case 'Preparatoria':
          this.currentUser.division = 'PREP'
          break;
      case 'Ingenieria':
          this.currentUser.division = 'PROF'
          break;
      case 'Administracion y Negocios':
          this.currentUser.division = 'PROF'
          break;
      case 'Posgrado':
          this.currentUser.division = 'POST'
          break;
      case 'Doctorado':
          this.currentUser.division = 'DOCT'
          break;
    }
  }

  update() {
    this.usersService.update(this.currentUser._id, this.currentUser).then(response => {
          setTimeout(() => {
            alert(`Usuario actualizado exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
    }).catch(err => console.log(`Error ${err}`))
  }

}
