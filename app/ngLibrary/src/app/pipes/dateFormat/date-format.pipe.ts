import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let date = value.split('T')[0].concat('T23:59:00.000Z')
    return super.transform(date, 'dd/MMM/yyyy');
  }

}
