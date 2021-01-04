import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarNombre',
})
export class OrdenarNombrePipe implements PipeTransform {
  transform(value1: any): any {
    return value1.sort((x, y) => {
      if (x.name < y.name) {
        return -1;
      }
      if (x.name > y.name) {
        return 1;
      }
      return 0;
    });
  }

  // transform(array: Array<any>, args: string): Array<any> {
  //   return array.sort((a: any, b: any) => {
  //     if (a[args] < b[args]) {
  //       return -1;
  //     } else if (a[args] > b[args]) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }
}
