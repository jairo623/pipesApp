import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { NumbersPageComponent } from './page/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './page/uncommon-page/uncommon-page.component';
import { BasicsPageComponent } from './page/basics-page/basics-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './page/order/order.component';
import { ToggleCasePipe } from './page/pipes/toggle-case.pipe';
import { canFlyPipe } from './page/pipes/can-Fly.pipe';
import { SortByPipe } from './page/pipes/sort-by.pipe';

@NgModule({
  declarations: [
    NumbersPageComponent,
    UncommonPageComponent,
    BasicsPageComponent,
    OrderComponent,
    ToggleCasePipe,
    canFlyPipe,
    SortByPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
