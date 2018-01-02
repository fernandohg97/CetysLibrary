import { Component, OnInit, ViewChild } from '@angular/core';
import { CareersService } from '../../services/careers/careers.service';
import { CareerModel } from '../../models/career.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingsService} from '../../services/settings/settings.service';

@Component({
  selector: 'app-admin-careers',
  templateUrl: './admin-careers.component.html',
  styleUrls: ['./admin-careers.component.css']
})
export class AdminCareersComponent implements OnInit {

  newCareer = new CareerModel()
  divisions: any
  careers: CareerModel[]
  called: Boolean
  textFile: any
  nameFile: string
  page: number = 1
  @ViewChild('inputFile') myInputVariable: any;
  anyErrors: any

  constructor(private settingsService: SettingsService, private careersService: CareersService, private router: Router) {
    this.called = false
  }

  ngOnInit() {
    this.settingsService.loadSchoolSettings().subscribe(res => {
      this.divisions = res
      console.log(this.divisions)
    })
    this.careersService.getAll().then(data => {
      console.log(data)
      this.careers = data
    })
  }

  createCareer() {
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
    }
  }

  areaChange(event) {
    console.log(event.division)
    this.newCareer.area = event.division
  }

  save() {
    console.log(this.newCareer)
    if (this.textFile) {
      console.log(this.textFile)
      let jsonFiles = JSON.parse(this.textFile)
      this.careersService.createFile(jsonFiles)
      .subscribe((response => {
        console.log(response)
        this.router.navigateByUrl('/admin-site')
      }), (err => this.anyErrors = JSON.parse(err._body))
      )
    } else {
      this.careersService.create(this.newCareer)
      .subscribe((response => {
        console.log(response)
        this.router.navigateByUrl('/admin-site')
      }), (err => {
        this.anyErrors = JSON.parse(err._body)
        console.log(this.anyErrors.exist)
      })
      )
    }
  }

  delete(id: string) {
    this.careersService.remove(id).then(response => {
      console.log(response)
    }).catch(err => console.log(`Hubo un error ${err}`))
  }

}
