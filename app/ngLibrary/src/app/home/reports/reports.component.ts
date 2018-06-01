import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { ReservationModel } from '../../models/reservation.model';
import { UsersService } from '../../services/users/users.service';
import { UserModel } from '../../models/user.model';
import { UserDetailsModel } from '../../models/userDetails.model';
import { NguiPopupComponent } from '@ngui/popup';
import { PopupUserDetailsComponent } from '../home-dialogs/popup-userDetails/popup-userDetails.component';
import { PopupUserInfoComponent } from '../home-dialogs/popup-user-info/popup-user-info.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { PopupEmployeeInfoComponent } from '../home-dialogs/popup-employee-info/popup-employee-info.component';
import { PopupExternalInfoComponent } from '../home-dialogs/popup-external-info/popup-external-info.component';
import { PopupBorrowedMaterialComponent } from '../home-dialogs/popup-borrowed-material/popup-borrowed-material.component';
import { PopupConfirmElementComponent } from '../home-dialogs/popup-confirm-element/popup-confirm-element.component';
import { AdminDataService } from '../../services/adminData/admin-data.service';
import { ElementType } from '../../enums/element-type.enum';
declare var $:any;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup2: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup3: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup4: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup5: NguiPopupComponent;
  @ViewChild('containerTable') containerTable: ElementRef;
  @ViewChild('reservationsTable') el: ElementRef;
  div: Boolean = false
  career: Boolean = false
  register: Boolean = false
  reservations: ReservationModel[]
  totalReservations: number
  searchByNumber: number
  page: number = 1
  currentReservation: UserDetailsModel
  currentPipe: string
  user: Boolean = false
  cubicle: Boolean = false
  date: Boolean = false
  career_Department: Boolean = false
  startDate: string
  endDate: string
  searchReservationNumber: string
  searchReservationCubicle: string
  searchReservationCareer: string

  constructor(
    private adminDataService: AdminDataService,
    private dataReservationService: DataReservationService,
    private reservationsService: ReservationsService,
    private usersService: UsersService) {
  this.currentPipe = 'searchReservation' }

  ngOnInit() { // Execute when component initialize
    $(document).foundation();
    this.reservationsService.getAll().then(data => {
      console.log(data)
      if (data) this.reservations = data
    })
    this.reservationsService.getCount().then(data => {
      this.totalReservations = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.reservationsService.createReservationDownloadFile() // Create reservations file in your local system
  }

  // Execute when you change or move to other component
  ngOnDestroy() {
    this.reservationsService.removeReservationFile()
  }

  getCurrentReservation(reservation) { // Display reservation user details
    this.currentReservation = reservation.usersDetails
    this.dataReservationService.addReservationsDetails(this.currentReservation)
    this.openPopup()
  }

  expandTable() { // To expand table the whole width
    let classValue = this.containerTable.nativeElement.getAttribute('class')
    if (classValue == 'grid-container') this.containerTable.nativeElement.setAttribute('class', 'fluid')
    else this.containerTable.nativeElement.setAttribute('class', 'grid-container')
  }
  // Download all reservations to your local system
  downloadTable() { // Download table elements. Only the ones that are displayed in the current page
    // $(this.el.nativeElement).tableExport({type:'csv', escape:'false'});
    this.reservationsService.getDownloadFile().then(res => {
      window.open(res.url)
    }).catch(err => {
      console.log(err)
      alert('Hubo un error al descargar el archivo')
    })
  }

  getCurrentUser(user) { // Display reservation user. (student, employee, externalUser)
    if (user.registrationNumber) {
      this.openPopup2()
      this.dataReservationService.changeUser(user)
    } else if (user.employeeNumber) {
      this.openPopup3()
      this.dataReservationService.changeEmployee(user)
    } else {
      this.openPopup4()
      this.dataReservationService.changeExternalUser(user)
    }
  }

  searchUser() { // Search filter user
    this.user = true
    this.cubicle = this.date = this.career_Department = false
    this.startDate = this.endDate = ''
    this.searchReservationCubicle = ''
    this.searchReservationCareer = ''
  }

  searchCubicle() { // Search filter cubicle
    this.cubicle = true
    this.user = this.date = this.career_Department = false
    this.searchReservationNumber = ''
    this.startDate = this.endDate = ''
    this.searchReservationCareer = ''
  }

  searchDate() { // Search filter date
    this.date = true
    this.cubicle = this.user = this.career_Department = false
    this.searchReservationNumber = ''
    this.searchReservationCubicle = ''
    this.searchReservationCareer = ''
  }

  searchCareerDepartment() { // Search filter career or department
    this.career_Department = true
    this.cubicle = this.user = this.date = false
    this.searchReservationNumber = ''
    this.searchReservationCubicle = ''
    this.startDate = this.endDate = ''
  }

  getBorrowedMaterial(material) { // Get borrowed material of specific user
    this.dataReservationService.changeBorrowedMaterial(material)
    this.popup.open(PopupBorrowedMaterialComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  openPopup() { // Display user details of specific user
    this.popup.open(PopupUserDetailsComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  openPopup2() { // Display user info
    this.popup2.open(PopupUserInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  openPopup3() { // Display employee info
    this.popup3.open(PopupEmployeeInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  openPopup4() { // Display external user info
    this.popup4.open(PopupExternalInfoComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

  deletePopup(id: string) { // Display confirm window to delete element
    this.adminDataService.changeReservationId(id)
    this.adminDataService.changeId(id)
    this.adminDataService.changeElement(ElementType.reservations)
    this.popup5.open(PopupConfirmElementComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }


}
