import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchExternalUser' // Pipe name
})
export class SearchExternalUserPipe implements PipeTransform {
  // Filter external user data
  transform(items: any, user: string): any {
    if (!user) return items // In case input external user is empty return all items
    return items.filter(value => value.userCode == user) // All items that match userCode with user
  }

}
