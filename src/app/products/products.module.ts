import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CanFly } from './pages/pipes/can-fly.pipe';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { SortbyPipe } from './pages/pipes/sort-by.pipe';
import { ToggleCasePipe } from './pages/pipes/toggle-case.pipe';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

@NgModule({
  declarations: [
    BasicsPageComponent,
    CanFly,
    NumbersPageComponent,
    OrderComponent,
    SortbyPipe,
    ToggleCasePipe,
    UncommonPageComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
