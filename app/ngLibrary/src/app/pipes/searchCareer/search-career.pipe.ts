import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCareer'
})
export class SearchCareerPipe implements PipeTransform {

  transform(items: any, career: string): any {
    // career = career.toUpperCase()
    if (!career) return items
    else {
      career = career.toUpperCase()
      return items.filter(value => value.careerCode == career || value.careerName == career)
    }
  }

}
