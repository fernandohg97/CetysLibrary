import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExternalUserService } from '../../services/externalUser/external-user.service';
import { ExternalUserModel } from '../../models/externalUser.model';

@Component({
  selector: 'app-admin-external-user',
  templateUrl: './admin-external-user.component.html',
  styleUrls: ['./admin-external-user.component.css']
})
export class AdminExternalUserComponent implements OnInit {

  newExternalUser = new ExternalUserModel()
  users: ExternalUserModel[]
  called: Boolean
  textFile: any
  nameFile: string
  page: number = 1
  @ViewChild('inputFile') myInputVariable: any;
  anyErrors: any
  errorFile: string
  errorItem: string

  constructor(private externalUserService: ExternalUserService, private router: Router) {
    this.called = false
  }

  ngOnInit() {
    this.externalUserService.getAll().then(data => {
      this.users = data
    })
  }

  createExternalUser() {
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
      this.externalUserService.createFile(jsonFiles)
      .subscribe((response => {
        console.log(response)
        this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.errorFile = JSON.parse(err._body).existExternalUsers
      })
      )
    } else {
      this.externalUserService.create(this.newExternalUser)
      .subscribe((response => {
        console.log(response)
        this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.anyErrors = JSON.parse(err._body)
        this.errorItem = JSON.parse(err._body).existExternalUser
      })
      )
    }
  }

  delete(id: string) {
    this.externalUserService.remove(id).then(response => {
      console.log(response)
    }).catch(err => console.log(`Hubo un error ${err}`))
  }

}
