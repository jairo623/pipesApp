import { Component } from '@angular/core';
import { color, hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
  changeOrder(value: keyof hero) {
    this.orderBy = value;
  }

  public orderBy?: keyof hero | '' | undefined = '';

  public heroes: hero[] = [
    { name: 'Superman', canFly: true, color: color.blue },

    { name: 'Batman', canFly: false, color: color.black },
    { name: 'Robin', canFly: false, color: color.red },
    { name: 'Linterna verde', canFly: true, color: color.green },

    { name: 'Daredevil', canFly: false, color: color.red },
  ];
}
//!this.isuppercase es el valor de la negacion si esta en false lo pasa a true
// utilizar las propiedades con el ? significa que puede venir o no el dato
//key of es para usar parametros de una interface
//usar el pipe vacio '' para inicializar algo que al principio no recibe ningun valor
