import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { PersianDatePipe } from '../../pipes/persiandate/persian-date.pipe';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { FormsModule } from '@angular/forms';
import {FilterProductsPipe} from '../../pipes/filterproduct/filter-products.pipe'
import { ProductService } from '../../services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { ProductTestService } from '../../services/product-test.service';

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
    FormsModule,
    HttpClientModule
  ],
  providers:[
    {
      provide: ProductService,
      useFactory: (http: HttpClient) => {
        // Provide custom logic for environment-specific service selection
        // (e.g., based on feature flags, configurations, etc.)
        if (environment.production) {
          return new ProductTestService();
        } else {
          return new ProductService(http);
        }
      },
      deps: [HttpClient],
    },
  ]
})
export class ProductsModule { }
