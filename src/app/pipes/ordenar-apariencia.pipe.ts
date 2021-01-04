import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarApariencia',
})

export class OrdenarAparienciaPipe implements PipeTransform {

  /**
   * Es un ordenamiento ASD de acuerdo al codigo ASCII por lo tanto
   * primero toma signos o gerogrificos y despues los caractees o numero.
   * Funciona solo dentro de un ngFor porque agarra dos elementos para comparar
   * @param value
   */
  transform(value: any): any {
    return value.sort((a, b) => {
      if (a.biography.alignment < b.biography.alignment) {
        return -1;
      }
      if (a.biography.alignment > b.biography.alignment) {
        return 1;
      }
      return 0;
    });
  }
}
