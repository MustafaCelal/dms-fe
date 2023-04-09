import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealersComponent } from './component/dealers/dealers.component';
import { DealerdetailComponent } from './component/dealerDetail/dealerdetail.component';
import { DeliverydetailComponent } from './component/deliverydetail/deliverydetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DealersComponent,
    DealerdetailComponent,
    DeliverydetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
