import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCareer' // Pipe name
})
export class SearchCareerPipe implements PipeTransform {
  // Pipe to filter career data
  transform(items: any, career: string): any {
    if (!career) return items // In case input is empty return all items
    career = career.toUpperCase() // career string to upper case
    return items.filter(value => value.careerCode == career) // All items careerCode that match with input career
  }

}
