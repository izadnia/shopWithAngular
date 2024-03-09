import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';

import { SingleProductComponent } from './components/single-product/single-product.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ProductsControllerComponent } from './components/products/products-controller/products-controller.component';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ProductsHeaderComponent } from './components/products/products-header/products-header.component';
import { PersianDatePipe } from './pipes/persiandate/persian-date.pipe';
import { FilterProductsPipe } from './pipes/filterproduct/filter-products.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    SingleProductComponent,
    ProductsControllerComponent,
    ProductsHeaderComponent,
    PersianDatePipe,
    FilterProductsPipe
  ],
  imports: [

    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
  ],
  providers: [],
})
export class ProductsModule {}
