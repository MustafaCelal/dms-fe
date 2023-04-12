import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DealersComponent} from './component/dealers/dealers.component';
import {DealerdetailComponent} from './component/dealerDetail/dealerdetail.component';
import {DeliverydetailComponent} from "./component/deliverydetail/deliverydetail.component";
import {DeliveryComponent} from "./component/delivery/delivery.component";

const routes: Routes = [
  {path: 'dealer', component: DealersComponent},
  {path: 'dealer/:id', component: DealerdetailComponent},
  {path: 'delivery/:deliveryId', component: DeliverydetailComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: '**', redirectTo: 'dealer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
