import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CubiclesService } from '../../services/cubicles/cubicles.service';
import { CubicleModel } from '../../models/cubicle.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-cubicles',
  templateUrl: './admin-cubicles.component.html',
  styleUrls: ['./admin-cubicles.component.css']
})
export class AdminCubiclesComponent implements OnInit {

  newCubicle = new CubicleModel()
  cubicles: CubicleModel[]
  called: Boolean
  textFile: any
  nameFile: string
  @ViewChild('inputFile') myInputVariable: any;
  anyErrors: any

  constructor(private cubiclesService: CubiclesService, private router: Router, private route: ActivatedRoute) {
    this.called = false
  }

  ngOnInit() {
    this.cubiclesService.getAll().then(data => {
      // console.log(data)
      this.cubicles = data
    })
  }

  createCubicle() {
    this.called = true
  }

  removeFile() {
    // console.log(this.myInputVariable.nativeElement.files);
    this.myInputVariable.nativeElement.value = "";
    // console.log(this.myInputVariable.nativeElement.files);
    this.nameFile = ''
    this.textFile = undefined
  }

  fileChange(event) {
    let input = event.target;
    this.nameFile = input.files[0].name
    // console.log(event.target.value)

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
      // console.log(this.textFile)
      let jsonFiles = JSON.parse(this.textFile)
      this.cubiclesService.createFile(jsonFiles)
      .subscribe((response => {
        // console.log(response)
        this.router.navigateByUrl('/admin-site')
      }), (err => this.anyErrors = JSON.parse(err._body))
      )
    } else {
      this.cubiclesService.create(this.newCubicle)
      .subscribe((response => {
        // console.log(response)
        this.router.navigateByUrl('/admin-site')
      }), (err => this.anyErrors = JSON.parse(err._body))
      )
    }
  }

  delete(id: string) {
    this.cubiclesService.remove(id).then(response => {
      // console.log(response)
      // console.log(response.status)
    }).catch(err => console.log(`hubo un error ${err}`))
  }

}
