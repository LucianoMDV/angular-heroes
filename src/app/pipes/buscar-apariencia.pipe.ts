import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarApariencia'
})
export class BuscarAparienciaPipe implements PipeTransform {

  transform(value1: any, arg1: any): any {
    const buscarPorApariencia = [];
    for (const recorrido of value1) {
      if (recorrido.biography.alignment.toLowerCase().indexOf(arg1.toLowerCase()) > -1) {
        buscarPorApariencia.push(recorrido);
      }
    }
    return buscarPorApariencia;
  }

}
