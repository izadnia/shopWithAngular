import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { PersianDatePipe } from '../../pipes/persiandate/persian-date.pipe';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { FormsModule } from '@angular/forms';
import {FilterProductsPipe} from '../../pipes/filterproduct/filter-products.pipe'

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    PersianDatePipe,
    SingleProductComponent,
    FilterProductsPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
