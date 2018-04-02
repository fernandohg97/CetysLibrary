import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee' // Pipe name
})
export class SearchEmployeePipe implements PipeTransform {
  // Filter employee data
  transform(items: any, number: string): any {
    if (!number) return items // In case input employee is empty return all items
    let employeeNumber = parseInt(number) // number string parse to int
    return items.filter(value => value.employeeNumber == employeeNumber) // All items that match value.employeeNumber with employeeNumber
  }
}
