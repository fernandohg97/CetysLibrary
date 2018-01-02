import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDepartment'
})
export class SearchDepartmentPipe implements PipeTransform {

  transform(items: any, name: string): any {
    if (!name) {
      return items
    }
    else {
      let number = parseInt(name)
      name = name.toUpperCase()
      // console.log(nameUpper)
      if (number != NaN) {
        return items.filter(value => value.departmentCode == number)
      }
      else {
        return items.filter(value => value.departmentName == name)
      }
    }
  }

}
