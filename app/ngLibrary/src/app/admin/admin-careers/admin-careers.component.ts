import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CareersService } from '../../services/careers/careers.service';
import { CareerModel } from '../../models/career.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingsService} from '../../services/settings/settings.service';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupConfirmComponent } from '../../home/home-dialogs/popup-confirm/popup-confirm.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { AdminSection } from '../../enums/admin-section.enum';

@Component({
  selector: 'app-admin-careers',
  templateUrl: './admin-careers.component.html',
  styleUrls: ['./admin-careers.component.css']
})
export class AdminCareersComponent implements OnInit, OnDestroy {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
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

  constructor(
    private dataReservationService: DataReservationService,
    private settingsService: SettingsService,
    private careersService: CareersService,
    private router: Router
  ) {
    this.called = false
  }

  ngOnInit() {
    this.settingsService.loadSchoolSettings().subscribe(res => {
      res.splice(res.length - 1, 1)
      this.divisions = res
    })
    this.careersService.getAll().then(data => {
      this.careers = data
    })
    this.careersService.createCareersDownloadFile()
  }

  ngOnDestroy() {
    this.careersService.removeCareersFile()
  }

  createCareer() {
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
    }
  }

  areaChange(event) {
    this.newCareer.area = event.division
  }

  openPopup() {
    this.dataReservationService.changeAdminSelected(AdminSection.careers)
      this.popup.open(PopupConfirmComponent, {
        classNames: 'custom',
        closeButton: true
      })
    }

    downloadFile() {
      this.careersService.getDownloadFile().then(res => {
        console.log(res)
        window.open(res.url)
      }).catch(err => {
        console.log(err)
        alert('Hubo un error al descargar el archivo')
      })
    }

  save() {
    if (this.textFile) {
      let jsonFiles = JSON.parse(this.textFile)
      this.careersService.createFile(jsonFiles)
      .subscribe((response => {
        this.router.navigateByUrl('/admin-site')
      }), (err => this.errorFile = JSON.parse(err._body).existCareers)
      )
    } else {
      this.careersService.create(this.newCareer)
      .subscribe((response => {
        this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.anyErrors = JSON.parse(err._body)
        this.errorItem = JSON.parse(err._body).existCareer
      })
      )
    }
  }

  delete(id: string) {
    this.careersService.remove(id).then(response => {
      response
    }).catch(err => console.log(`Hubo un error ${err}`))
  }

}
