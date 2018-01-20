import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(items: any, number: string): any {
    if (!number) return items
    let employeeNumber = parseInt(number)
    return items.filter(value => value.employeeNumber == employeeNumber)
  }
}
