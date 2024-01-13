import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'jairo ';
  public nameUpper: string = 'JAIRO ';
  public fullName: string = 'JaIrO SAviNo';
  public customDate: Date = new Date();
}
