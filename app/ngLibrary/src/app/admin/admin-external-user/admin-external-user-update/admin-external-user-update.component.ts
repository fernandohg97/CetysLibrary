import { Component, OnInit } from '@angular/core';
import { ExternalUserService } from '../../../services/externalUser/external-user.service';
import { ExternalUserModel } from '../../../models/externalUser.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-external-user-update',
  templateUrl: './admin-external-user-update.component.html',
  styleUrls: ['./admin-external-user-update.component.css']
})
export class AdminExternalUserUpdateComponent implements OnInit {

  currentUser: ExternalUserModel

  constructor(private router: Router, private route: ActivatedRoute, private externalUserService: ExternalUserService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let externalUserId = params['id'] //
      if (externalUserId) {
        this.externalUserService.getById(externalUserId).then(user => {
          this.currentUser = user
        })
      }
    })
  }

  update() {
    this.externalUserService.update(this.currentUser._id, this.currentUser).then(response => {
      if (response.status == 200 || response.status == 204) {
        this.router.navigateByUrl('/admin-site')
      }
    }).catch(err => console.log(`Error ${err}`))
  }

}
