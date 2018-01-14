import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { SettingsService } from '../../services/settings/settings.service';
import { UserModel } from '../../models/user.model';
import { CareersService } from '../../services/careers/careers.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  newUser = new UserModel()
  divisions: any
  users: UserModel[]
  careers: String[]
  called: Boolean
  textFile: any
  nameFile: string
  page: number = 1
  @ViewChild('inputFile') myInputVariable: any;
  anyErrors: any

  constructor(
    private usersService: UsersService,
    private settingService: SettingsService,
    private router: Router,
    private route: ActivatedRoute,
    private careersService: CareersService
  ) {
    this.called = false
  }

  ngOnInit() {
    this.settingService.loadSchoolSettings().subscribe(res => {
      let data = res.splice(res.length - 1, 1)
      this.divisions = data
      console.log(this.divisions)
    })
    this.usersService.getAll().then(data => {
      console.log(data)
      this.users = data
    })
  }

  createUser() {
    this.called = true
  }

  removeFile() {
    console.log(this.myInputVariable.nativeElement.files);
    this.myInputVariable.nativeElement.value = "";
    console.log(this.myInputVariable.nativeElement.files);
    this.nameFile = ''
    this.textFile = undefined
  }

  fileChange(event) {
    let input = event.target;
    this.nameFile = input.files[0].name

    for (var index = 0; index < input.files.length; index++) {
        let reader = new FileReader();
        reader.onload = () => {
            // this 'text' is the content of the file
            this.textFile = reader.result;
        }
        reader.readAsText(input.files[index]);
    };
  }

  save() {
    if (this.textFile) {
      console.log(this.textFile)
      let jsonFiles = JSON.parse(this.textFile)
      this.usersService.createFile(jsonFiles)
      .subscribe((response => {
        console.log(response)
        this.router.navigateByUrl('/admin-site')
      }), (err => this.anyErrors = JSON.parse(err._body))
      )
    } else {
      this.usersService.create(this.newUser)
      .subscribe((response => {
        console.log(response)
        this.router.navigateByUrl('/admin-site')
      }), (err => this.anyErrors = JSON.parse(err._body))
      )
    }
  }

  delete(id: string) {
    this.usersService.remove(id).then(response => {
      console.log(response)
    }).catch(err => console.log(`Hubo un error ${err}`))
  }

  divisionChange(event) {
    console.log(event.division)
    this.careers = new Array
    this.careersService.getByDivision(event.division).then(data => {
        data.forEach(career => {
          this.careers.push(career.careerCode)
        })
    }).catch(err => console.log(`Error ${err}`))
    this.newUser.division = event.division
  }

}
