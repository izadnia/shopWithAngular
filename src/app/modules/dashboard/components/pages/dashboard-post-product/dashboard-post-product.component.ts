import { Component } from '@angular/core';
import { Product } from '../../../../../models/product';
import { ProductService } from '../../../../../services/product.service';

@Component({
  selector: 'app-dashboard-post-product',
  templateUrl: './dashboard-post-product.component.html',
  styleUrl: './dashboard-post-product.component.scss',
})
export class DashboardPostProductComponent {
  constructor(private productService: ProductService) {}

  addProduct(productModel: Product) {
    this.productService
      .addProduct(productModel)
      .subscribe((m) => (m ? true : false));
  }

  productModel: any = {
    title: '',
    price: undefined,
    category: 'میوه',
    expireDate: '1720068213258',
    id: 0,
  };
}
