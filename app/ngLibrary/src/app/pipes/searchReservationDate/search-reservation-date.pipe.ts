import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservationDate'
})
export class SearchReservationDatePipe implements PipeTransform {

  transform(items: any, startDate: any, endDate: any): any {
    if (!startDate || !endDate) return items
    // console.log(startDate)
    // console.log(endDate)
    return items.filter(value => value.reservationDate >= startDate && value.reservationDate <= endDate)
  }

}
