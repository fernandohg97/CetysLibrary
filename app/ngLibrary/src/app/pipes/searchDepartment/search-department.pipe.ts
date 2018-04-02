import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDepartment' // Pipe name
})
export class SearchDepartmentPipe implements PipeTransform {
  // Filter department data
  transform(items: any, name: string): any {
    if (!name) return items // In case input department is empty return all items
    let number = parseInt(name) // number string parse to int
    return items.filter(value => value.departmentCode == number) // All items that match departmentCode with number
  }
}
