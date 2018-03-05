import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservationCareer'
})
export class SearchReservationCareerPipe implements PipeTransform {

  transform(items: any, text: any): any {
    if (!text) return items
    let career
    let department
    if (isNaN(text)) {
      career = text.toUpperCase()
    } else {
      department = parseInt(text)
    }
    return items.filter(value => {
      if (value.hasOwnProperty('user')) {
        if (value.user.career == career) return value
      } else if (value.hasOwnProperty('employee')) {
        if (value.employee.department == department) return value
      }
    })
  }

}
