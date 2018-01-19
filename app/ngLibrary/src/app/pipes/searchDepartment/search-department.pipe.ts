import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDepartment'
})
export class SearchDepartmentPipe implements PipeTransform {

  transform(items: any, name: string): any {
    if (!name) return items
    let number = parseInt(name)
    return items.filter(value => value.departmentCode == number)
  }
}
