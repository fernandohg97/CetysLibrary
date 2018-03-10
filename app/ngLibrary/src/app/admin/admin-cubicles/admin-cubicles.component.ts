import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CubiclesService } from '../../services/cubicles/cubicles.service';
import { CubicleModel } from '../../models/cubicle.model';
import { FormGroup } from '@angular/forms';
import { AdminSection } from '../../enums/admin-section.enum';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';
import { PopupConfirmComponent } from '../../home/home-dialogs/popup-confirm/popup-confirm.component';
import { DataReservationService } from '../../services/dataReservation/data-reservation.service';
import { ElementType } from '../../enums/element-type.enum';
import { AdminDataService } from '../../services/adminData/admin-data.service';
import { PopupConfirmElementComponent } from '../../home/home-dialogs/popup-confirm-element/popup-confirm-element.component';

@Component({
  selector: 'app-admin-cubicles',
  templateUrl: './admin-cubicles.component.html',
  styleUrls: ['./admin-cubicles.component.css']
})
export class AdminCubiclesComponent implements OnInit, OnDestroy {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  @ViewChild(NguiPopupComponent) popup2: NguiPopupComponent;
  @ViewChild('cubicleTable') cubicleTable: ElementRef;
  newCubicle = new CubicleModel()
  cubicles: CubicleModel[]
  called: Boolean
  textFile: any
  nameFile: string
  @ViewChild('inputFile') myInputVariable: any;
  anyErrors: any
  errorFile: string
  errorItem: string
  cubiclesFile: any
  totalCubicles: number

  constructor(private adminDataService: AdminDataService, private dataReservationService: DataReservationService, private cubiclesService: CubiclesService, private router: Router, private route: ActivatedRoute) {
    this.called = false
  }

  ngOnInit() {
    this.cubiclesService.getCount().then(data => {
      this.totalCubicles = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.cubiclesService.getAll().then(data => {
      this.cubicles = data
    })
    this.cubiclesService.createCubiclesDownloadFile()
  }

  ngOnDestroy() {
    this.cubiclesService.removeCubiclesFile()
  }

  expandTable() {
    let classValue = this.cubicleTable.nativeElement.getAttribute('class')
    if (classValue == 'grid-container') this.cubicleTable.nativeElement.setAttribute('class', 'fluid')
    else this.cubicleTable.nativeElement.setAttribute('class', 'grid-container')
  }

  createCubicle() {
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

  openPopup() {
    this.dataReservationService.changeAdminSelected(AdminSection.cubicles)
      this.popup.open(PopupConfirmComponent, {
        classNames: 'custom',
        closeButton: true
      })
    }

    downloadFile() {
      this.cubiclesService.getDownloadFile().then(res => {
        window.open(res.url)
      }).catch(err => {
        alert('Hubo un error al descargar el archivo')
      })
    }

  save() {
    if (this.textFile) {
      let jsonFiles = JSON.parse(this.textFile)
      this.cubiclesService.createFile(jsonFiles)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Cubiculos creados exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => this.errorFile = JSON.parse(err._body).existCubicles)
      )
    } else {
      this.cubiclesService.create(this.newCubicle)
      .subscribe((response => {
          setTimeout(() => {
            alert(`Cubiculo creado exitosamente`)
          }, 500)
          this.router.navigateByUrl('/admin-site')
      }), (err => {
          this.anyErrors = JSON.parse(err._body)
          this.errorItem = JSON.parse(err._body).existCubicle
        })
      )
    }
  }

  delete(id: string) {
    this.adminDataService.changeId(id)
    this.adminDataService.changeElement(ElementType.cubicles)
    this.popup2.open(PopupConfirmElementComponent, {
      classNames: 'custom',
      closeButton: true
    })
  }

}
