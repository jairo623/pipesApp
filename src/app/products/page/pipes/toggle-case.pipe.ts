import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false) {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
//esto se lee si retornamos true en toupper usamos el valor en mayuscula, sino se usa el valor en minuscula
//el pipe puede estar configurado con muchas caracteristicas
