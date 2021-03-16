import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findItem'
})
export class FindItemPipe implements PipeTransform {

  transform(value: any, findProperty: string, findOn: Array<any>, extractProperty: any): any {
    const object = findOn?.find(item => item[findProperty] === value); //the found element from the arry will have the 'value'
    
    if (object && extractProperty) { 
      return object[extractProperty];  
    }
    return object;
  }

}
