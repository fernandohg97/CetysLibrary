import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCubicle'
})
export class SearchCubiclePipe implements PipeTransform {

  transform(items: any, cubicle: string): any {
    let cubicleNumber = parseInt(cubicle)
    if (!cubicle) return items
    return items.filter(value => value.cubicleNumber == cubicle)
  }

}
