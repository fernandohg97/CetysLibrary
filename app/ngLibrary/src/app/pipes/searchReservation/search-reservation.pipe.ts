import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservation'
})
export class SearchReservationPipe implements PipeTransform {

  transform(items: any, number: string): any {
    if (!number) return items
    let matricula = parseInt(number)
    let user
    return items.filter(value => {
      if (value.hasOwnProperty('user')) {
        if (value.user.registrationNumber == matricula) return value
      } else if (value.hasOwnProperty('employee')) {
        if (value.employee.employeeNumber == matricula) return value
      } else {
        if (value.externalUser.userCode == number) return value
      }
    })
    // console.log(user)
    // return user
  }

}
