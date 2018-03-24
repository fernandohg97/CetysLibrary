import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservation' // Pipe name
})
export class SearchReservationPipe implements PipeTransform {
  // Filter reservation data
  transform(items: any, code: string): any {
    if (!code) return items // In case input reservation data is empty
    let codeUpper = code.toUpperCase() // String to upper case
    let matricula = parseInt(code) // String code parse to int
    return items.filter(value => {
      if (value.hasOwnProperty('user')) { // In case reservation has user property
        if (value.user.registrationNumber == matricula) return value
      } else if (value.hasOwnProperty('employee')) { // In case reservation has employee property
        if (value.employee.employeeNumber == matricula) return value
      } else { //  In case reservation has externalUser property
        if (value.externalUser.userCode == codeUpper) return value
      }
    })
  }

}
