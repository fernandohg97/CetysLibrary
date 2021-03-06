import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservationDate' // Pipe name
})
export class SearchReservationDatePipe implements PipeTransform {
  // Filter reservation date data
  transform(items: any, startDate: any, endDate: any): any {
    if (!startDate || !endDate) return items // In case startDate or endDate input is empty
    return items.filter(value => value.reservationDate >= new Date(startDate).toISOString() && value.reservationDate <= new Date(endDate).toISOString()) // All items that are between startDate and endDate
  }

}
