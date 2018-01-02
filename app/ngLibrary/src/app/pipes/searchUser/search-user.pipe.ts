import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {
  transform(items: any, number: string): any {
    let matricula = parseInt(number)
    if (!number) return items
    return items.filter(value => value.registrationNumber == matricula)
  }

}
