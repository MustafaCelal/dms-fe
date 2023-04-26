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
import { AddDealerComponent } from './component/add-dealer/add-dealer.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    DealersComponent,
    DealerdetailComponent,
    DeliverydetailComponent,
    DeliveryComponent,
    AddDealerComponent,
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
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
