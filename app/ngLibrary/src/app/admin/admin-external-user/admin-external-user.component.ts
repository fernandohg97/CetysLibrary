import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('externalTable') externalTable: ElementRef;
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
  totalExternals: number

  constructor(private adminDataService: AdminDataService, private externalUserService: ExternalUserService, private router: Router) {
    this.called = false
  }
  // Execute when component initialize
  ngOnInit() {
    this.externalUserService.getCount().then(data => {
      this.totalExternals = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.externalUserService.getAll().then(data => {
      this.users = data
    })
  }
  // Expand table button
  expandTable() {
    let classValue = this.externalTable.nativeElement.getAttribute('class')
    if (classValue == 'grid-container') this.externalTable.nativeElement.setAttribute('class', 'fluid')
    else this.externalTable.nativeElement.setAttribute('class', 'grid-container')
  }
  // Show form template when add user is clic
  createExternalUser() {
    this.called = true
  }
  // Remove current uploaded file
  removeFile() {
    this.myInputVariable.nativeElement.value = "";
    this.nameFile = ''
    this.textFile = undefined
  }
  // Execute when you select a different file
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
  // Create new external user
  save() {
    if (this.textFile) {  // In case you create external users from an uploaded file
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
    } else { // In case you create only one external user
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
  // Show popup confirm delete when you want to remove just one element
  delete(id: string) {
    this.adminDataService.changeId(id)
    this.adminDataService.changeElement(ElementType.externals)
    this.popup.open(PopupConfirmElementComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }
}
