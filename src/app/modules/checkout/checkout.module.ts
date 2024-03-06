import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { PersianDatePipe } from '../../pipes/persiandate/persian-date.pipe';


@NgModule({
  declarations: [
    CheckoutComponent,
    PersianDatePipe
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
