import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  constructor(
    private productService: ProductService,
    private router : Router
    ) {}

  selectedProductList: Product[] = [];
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getSelectedProducts()
}
  getSelectedProducts() {
    this.productService.getSelectedProducts().subscribe((data) => {
      this.selectedProductList = data;
    });
  }

  selectProductPage(item: Product) {
    this.productService.setSelectedProductPage(item);
    this.router.navigate(['products/fruit', item.id]);
  }

  deleteSelectedProduct(id: number) {
    this.productService.deleteSelectedProduct(id);
  }
}
