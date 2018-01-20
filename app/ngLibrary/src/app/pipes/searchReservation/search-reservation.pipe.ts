import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservation'
})
export class SearchReservationPipe implements PipeTransform {

  transform(items: any, code: string): any {
    if (!code) return items
    let codeUpper = code.toUpperCase()
    let matricula = parseInt(code)
    let user
    return items.filter(value => {
      if (value.hasOwnProperty('user')) {
        if (value.user.registrationNumber == matricula) return value
      } else if (value.hasOwnProperty('employee')) {
        if (value.employee.employeeNumber == matricula) return value
      } else {
        if (value.externalUser.userCode == codeUpper) return value
      }
    })
  }

}
