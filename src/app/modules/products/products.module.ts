import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { FormsModule } from '@angular/forms';
import {FilterProductsPipe} from '../../pipes/filterproduct/filter-products.pipe'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    SingleProductComponent,
    FilterProductsPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
   
  ]
})
export class ProductsModule { }
