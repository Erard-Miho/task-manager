import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findItem'
})
export class FindItemPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
