import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservationCareer'
})
export class SearchReservationCareerPipe implements PipeTransform {
  // Filter reservation career or department data
  transform(items: any, text: any): any {
    if (!text) return items // In case input career or department is empty
    let career
    let department
    if (isNaN(text)) {
      career = text.toUpperCase() // String to uppercase
    } else {
      department = parseInt(text) // String text parse to int
    }
    return items.filter(value => {
      if (value.hasOwnProperty('user')) { // In case reservation has user property
        if (value.user.career == career) return value
      } else if (value.hasOwnProperty('employee')) { // In case reservation has employee property
        if (value.employee.department == department) return value
      }
    })
  }

}
