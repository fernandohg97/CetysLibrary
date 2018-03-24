import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservationCubicle'
})
export class SearchReservationCubiclePipe implements PipeTransform {
  // Filter reservation cubicle data
  transform(items: any, cubicle: string): any {
    if (!cubicle) return items // In case input cubicle is empty
    let cubicleNumber = parseInt(cubicle) // String cubicle parse to int
    return items.filter(value => value.cubicle == cubicleNumber) // All items that cubicle match with cubicleNumber
  }

}
