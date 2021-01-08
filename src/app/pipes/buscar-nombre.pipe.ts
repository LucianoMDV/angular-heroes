import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarNombre'
})
export class BuscarNombrePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const buscarPorNombre = [];
    for (const recorrido of value) {
      if (recorrido.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        buscarPorNombre.push(recorrido);
      }
    }
    return buscarPorNombre;
  }

}
