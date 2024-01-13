import { Pipe, PipeTransform } from '@angular/core';
import { hero } from '../../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: hero[], sortBy?: keyof hero | ''): hero[] {
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'canFly':
        return heroes.sort((a, b) => (a.canFly > b.canFly ? 1 : -1));
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return heroes;
    }
  }
}
// si quisiera que se ordene al revez cambiar el signo  ejemplo a.color < b.color
//en transform primero va de donde voy a inicializar el pipe y luego la funcion a la que le voy
//a modificar o en este caso ordenar 
//luego usamos un swich para usar las palabras nombre etc y filtrar por esas