import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { CareersService } from '../../services/careers/careers.service';
import { CareerModel } from '../../models/career.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingsService} from '../../services/settings/settings.service';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupConfirmComponent } from '../../home/home-dialogs/popup-confirm/popup-confirm.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { AdminSection } from '../../enums/admin-section.enum';
import { ElementType } from '../../enums/element-type.enum';
import { AdminDataService } from '../../services/adminData/admin-data.service';
import { PopupConfirmElementComponent } from '../../home/home-dialogs/popup-confirm-element/popup-confirm-element.component';

@Component({
  selector: 'app-admin-careers',
  templateUrl: './admin-careers.component.html',
  styleUrls: ['./admin-careers.component.css']
})
export class AdminCareersComponent implements OnInit, OnDestroy {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup2: NguiPopupComponent;
  @ViewChild('careerTable') careerTable: ElementRef;
  newCareer = new CareerModel()
  divisions: any
  careers: CareerModel[]
  called: Boolean
  textFile: any
  nameFile: string
  page: number = 1
  @ViewChild('inputFile') myInputVariable: any;
  anyErrors: any
  errorFile: string
  errorItem: string
  totalCareers: number

  constructor(
    private adminDataService: AdminDataService,
    private dataReservationService: DataReservationService,
    private settingsService: SettingsService,
    private careersService: CareersService,
    private router: Router
  ) {
    this.called = false
  }
  // Execute when component initialize
  ngOnInit() {
    this.careersService.getCount().then(data => {
      this.totalCareers = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.settingsService.loadSchoolSettings().subscribe(res => {
      res.splice(res.length - 1, 1)
      this.divisions = res
    })
    this.careersService.getAll().then(data => {
      this.careers = data
    })
    this.careersService.createCareersDownloadFile() // Create careers file in your local system
  }
  // Execute when you change or move to other component
  ngOnDestroy() {
    this.careersService.removeCareersFile()
  }
  // Expand table button
  expandTable() {
    let classValue = this.careerTable.nativeElement.getAttribute('class')
    if (classValue == 'grid-container') this.careerTable.nativeElement.setAttribute('class', 'fluid')
    else this.careerTable.nativeElement.setAttribute('class', 'grid-container')
  }
  // Show form template when add career button is clic
  createCareer() {
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
    }
  }
  // Change area depending in the division selected
  areaChange(event) {
    this.newCareer.area = event.division
  }
  // Show pop up confirm delete all careers
  openPopup() {
    this.dataReservationService.changeAdminSelected(AdminSection.careers)
      this.popup.open(PopupConfirmComponent, {
        classNames: 'custom',
        closeButton: true
      })
    }
    // Download all careers
    downloadFile() {
      this.careersService.getDownloadFile().then(res => {
        window.open(res.url)
      }).catch(err => {
        alert('Hubo un error al descargar el archivo')
      })
    }
 // Create new career
  save() {
    if (this.textFile) { // In case you create careers from an uploaded file
      let jsonFiles = JSON.parse(this.textFile)
      this.careersService.createFile(jsonFiles)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Carreras creadas exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => this.errorFile = JSON.parse(err._body).existCareers)
      )
    } else { // In case you create only one career
      this.careersService.create(this.newCareer)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Carrera creada exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.anyErrors = JSON.parse(err._body)
        this.errorItem = JSON.parse(err._body).existCareer
      })
      )
    }
  }
  // Show popup confirm delete when you want to remove just one element
  delete(id: string) {
    this.adminDataService.changeId(id)
    this.adminDataService.changeElement(ElementType.careers)
    this.popup2.open(PopupConfirmElementComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

}
