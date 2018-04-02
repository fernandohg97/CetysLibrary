import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser' // Pipe name
})
export class SearchUserPipe implements PipeTransform {
  // Filter user (student) data
  transform(items: any, number: string): any {
    let matricula = parseInt(number) // String number parse to int
    if (!number) return items // In case input user is empty
    return items.filter(value => value.registrationNumber == matricula) // All items that match registrationNumber with matricula
  }

}
