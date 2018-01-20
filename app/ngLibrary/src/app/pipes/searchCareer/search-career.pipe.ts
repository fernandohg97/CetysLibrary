import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCareer'
})
export class SearchCareerPipe implements PipeTransform {

  transform(items: any, career: string): any {
    if (!career) return items
    career = career.toUpperCase()
    return items.filter(value => value.careerCode == career)
  }

}
