import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DealersComponent} from './component/dealers/dealers.component';
import {DealerdetailComponent} from './component/dealerDetail/dealerdetail.component';
import {DeliverydetailComponent} from './component/deliverydetail/deliverydetail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DeliveryComponent} from './component/delivery/delivery.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DealersComponent,
    DealerdetailComponent,
    DeliverydetailComponent,
    DeliveryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
