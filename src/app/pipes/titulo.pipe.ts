import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulo'
})
export class TituloPipe implements PipeTransform {

  transform(value: string): string {
    const encabezado = 'Album' + value;
    return encabezado;
  }

}
