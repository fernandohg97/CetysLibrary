import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCubicle' // Pipe name
})
export class SearchCubiclePipe implements PipeTransform {
  // Pipe to filter cubicle data
  transform(items: any, cubicle: string): any {
    let cubicleNumber = parseInt(cubicle) // cubicle string number parse to int
    if (!cubicle) return items // In case input cubicle is empty return all items
    return items.filter(value => value.cubicleNumber == cubicle) // All items that cubicleNumber match with input cubicle
  }

}
