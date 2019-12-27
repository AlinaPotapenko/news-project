import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthLimitPipe'
})
export class LengthLimitPipe implements PipeTransform {

  transform(value?: string, args?: any): string {
    let str = '';
    if (value.length > 30) {
      str = value.slice(0, 30) + '...';
      return str;
    } else {
      return value;
    }
  }

}
