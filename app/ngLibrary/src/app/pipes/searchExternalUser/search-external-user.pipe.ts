import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchExternalUser'
})
export class SearchExternalUserPipe implements PipeTransform {

  transform(items: any, user: string): any {
    if (!user) return items
    return items.filter(value => value.userCode == user)
  }

}
