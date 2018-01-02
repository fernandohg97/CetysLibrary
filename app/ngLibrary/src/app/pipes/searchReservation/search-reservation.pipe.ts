import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservation'
})
export class SearchReservationPipe implements PipeTransform {

  transform(items: any, number: string): any {
    let matricula = parseInt(number)
    if (!number) return items
    return items.filter(value => value.user.registrationNumber == matricula)
  }

}
