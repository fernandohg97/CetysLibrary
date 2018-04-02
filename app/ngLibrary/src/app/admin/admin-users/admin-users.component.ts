import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { SettingsService } from '../../services/settings/settings.service';
import { UserModel } from '../../models/user.model';
import { CareersService } from '../../services/careers/careers.service';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupConfirmComponent } from '../../home/home-dialogs/popup-confirm/popup-confirm.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { AdminSection } from '../../enums/admin-section.enum';
import { AdminDataService } from '../../services/adminData/admin-data.service';
import { ElementType } from '../../enums/element-type.enum';
import { PopupConfirmElementComponent } from '../../home/home-dialogs/popup-confirm-element/popup-confirm-element.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit, OnDestroy {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup2: NguiPopupComponent;
  @ViewChild('usersTable') usersTable: ElementRef;
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
  errorFile: string
  errorItem: string
  totalUsers: number

  constructor(
    private adminDataService: AdminDataService,
    private dataReservationService: DataReservationService,
    private usersService: UsersService,
    private settingService: SettingsService,
    private router: Router,
    private route: ActivatedRoute,
    private careersService: CareersService
  ) {
    this.called = false
  }
  // Execute when component initialize
  ngOnInit() {
    this.usersService.getCount().then(data => {
      this.totalUsers = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.settingService.loadSchoolSettings().subscribe(res => {
      res.splice(res.length - 1, 1)
      this.divisions = res
    })
    this.usersService.getAll().then(data => {
      this.users = data
    })
    this.usersService.createUsersDownloadFile() // Create users file in your local system
  }
  // Execute when you change or move to other component
  ngOnDestroy() {
    this.usersService.removeUsersFile()
  }
  // Expand table button
  expandTable() {
    let classValue = this.usersTable.nativeElement.getAttribute('class')
    if (classValue == 'grid-container') this.usersTable.nativeElement.setAttribute('class', 'fluid')
    else this.usersTable.nativeElement.setAttribute('class', 'grid-container')
  }
  // Show form template when add user button is clic
  createUser() {
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
  // Show pop up confirm delete all users
  openPopup() {
    this.dataReservationService.changeAdminSelected(AdminSection.students)
      this.popup.open(PopupConfirmComponent, {
        classNames: 'custom',
        closeButton: true
      })
    }
    // Show popup confirm delete when you want to remove just one element
    delete(id: string) {
      this.adminDataService.changeId(id)
      this.adminDataService.changeElement(ElementType.students)
        this.popup2.open(PopupConfirmElementComponent, {
          classNames: 'custom',
          closeButton: true
        })
      }
      // Download all users
    downloadFile() {
      this.usersService.getDownloadFile().then(res => {
        window.open(res.url)
      }).catch(err => {
        alert('Hubo un error al descargar el archivo')
      })
    }
  // Create new user
  save() {
    if (this.textFile) { // In case you create users from an uploaded file
      let jsonFiles = JSON.parse(this.textFile)
      this.usersService.createFile(jsonFiles)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Estudiantes creados exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => this.errorFile = JSON.parse(err._body).existUsers)
      )
    } else { // In case you create only one user
      this.usersService.create(this.newUser)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Estudiante creado exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.anyErrors = JSON.parse(err._body)
        this.errorItem = JSON.parse(err._body).existUser
      })
      )
    }
  }
<<<<<<< HEAD

=======
  // Change the division value to only valid division values
  // Depending in the division selected it will show the corresponding careers
>>>>>>> fernando
  divisionChange(event) {
    switch (event.division) {
      case 'DOCTORADO':
        this.newUser.division = 'DOCT'
        break
      case 'POSGRADO':
        this.newUser.division = 'POST'
        break
      case 'INGENIERIA':
        this.newUser.division = 'PROF'
        break
      case 'ADMINISTRACION Y NEGOCIOS':
        this.newUser.division = 'PROF'
        break
      case 'PREPARATORIA':
        this.newUser.division = 'PREP'
        break
    }
    this.careers = new Array
    this.careersService.getByDivision(event.division).then(data => {
        data.forEach(career => {
          this.careers.push(career.careerCode)
        })
    }).catch(err => console.log(`Error ${err}`))
  }
}
