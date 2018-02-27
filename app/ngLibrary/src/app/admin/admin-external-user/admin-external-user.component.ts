import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExternalUserService } from '../../services/externalUser/external-user.service';
import { ExternalUserModel } from '../../models/externalUser.model';
import { NguiPopupComponent } from '@ngui/popup';
import { PopupConfirmElementComponent } from '../../home/home-dialogs/popup-confirm-element/popup-confirm-element.component';
import { AdminDataService } from '../../services/adminData/admin-data.service';
import { ElementType } from '../../enums/element-type.enum';

@Component({
  selector: 'app-admin-external-user',
  templateUrl: './admin-external-user.component.html',
  styleUrls: ['./admin-external-user.component.css']
})
export class AdminExternalUserComponent implements OnInit {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
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

  constructor(private adminDataService: AdminDataService, private externalUserService: ExternalUserService, private router: Router) {
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
    this.myInputVariable.nativeElement.value = "";
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
      let jsonFiles = JSON.parse(this.textFile)
      this.externalUserService.createFile(jsonFiles)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Externos creados exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.errorFile = JSON.parse(err._body).existExternalUsers
      })
      )
    } else {
      this.externalUserService.create(this.newExternalUser)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Externo creado exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.anyErrors = JSON.parse(err._body)
        this.errorItem = JSON.parse(err._body).existExternalUser
      })
      )
    }
  }

  delete(id: string) {
    this.adminDataService.changeId(id)
    this.adminDataService.changeElement(ElementType.externals)
    this.popup.open(PopupConfirmElementComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

}
