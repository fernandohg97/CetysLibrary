import { Component, OnInit } from '@angular/core';
import { CubiclesService } from '../../../services/cubicles/cubicles.service';
import { CubicleModel } from '../../../models/cubicle.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-cubicles-update',
  templateUrl: './admin-cubicles-update.component.html',
  styleUrls: ['./admin-cubicles-update.component.css'],
  providers: [CubiclesService]
})
export class AdminCubiclesUpdateComponent implements OnInit {

  currentCubicle: CubicleModel

  constructor(private cubiclesService: CubiclesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let cubicleId = params['id'] //
      console.log(`Id del cubiculo: ${cubicleId}`)
      if (cubicleId) {
        this.cubiclesService.getById(cubicleId).then(cubicle => {
          console.log(cubicle)
          this.currentCubicle = cubicle
        })
      }
    })
  }

  update() {
    this.cubiclesService.update(this.currentCubicle._id, this.currentCubicle).then(response => {
        setTimeout(() => {
          alert(`Cubiculo actualizado exitosamente`)
        }, 500)
        this.router.navigateByUrl('/admin-site')
    }).catch(err => console.log(`Error ${err}`))
  }

}
