import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthLimitForContent'
})
export class LengthLimitForContentPipe implements PipeTransform {

  transform(value?: string, args?: any): string {
    let str = '';
    if (value.length > 260) {
      str = value.slice(0, 260) + '   read more';
      return str;
    } else {
      return value;
    }
  }

}
