import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n select
  public name: string = 'fernando';
  public gender: 'male' | 'female' = 'male';

  chageClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
    console.log(this.chageClient());
  }
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  //i18nPlural
  public clients: string[] = [
    'Maria',
    'Fernando',
    'Pedro',
    'Eduardo',
    'Natalia',
    'Hernando',
    'Melissa',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
    console.log(this.deleteClient());
  }

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa,Canada',
  };

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa');
    }, 3500);
  });
}
