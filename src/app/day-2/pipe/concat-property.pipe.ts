import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatProperty'
})
export class ConcatPropertyPipe implements PipeTransform {

  transform(value: any[], property: string): string {
    if (!value || !Array.isArray(value) || !property) {
      return '';
    }
    const cvalue = value.map(item => item[property]).join(', ');
    console.log("cvalue", cvalue);
    return cvalue;
  }

}
