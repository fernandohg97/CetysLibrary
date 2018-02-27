import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservationCubicle'
})
export class SearchReservationCubiclePipe implements PipeTransform {

  transform(items: any, cubicle: string): any {
    if (!cubicle) return items
    let cubicleNumber = parseInt(cubicle)
    return items.filter(value => value.cubicle == cubicleNumber)
  }

}
