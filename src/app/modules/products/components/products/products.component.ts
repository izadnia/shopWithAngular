import { Component } from '@angular/core';
import { Product } from '../../../../models/product';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(private productService: ProductService) {}
  inputSearchLabel: string = 'جست و جو';
  sumSelectedProduct: Product = new Product();
  filter: Product = new Product();
  productList: Product[] = [];

  ngOnInit(): void {
    (this.filter.price = 1000), this.setProduct();
  }

  setProduct() {
    this.productService.getProducts().subscribe((data) => {
      this.productList = data;
    });
  }

  selectedProduct(item: Product) {
    this.productService.selectedProduct((m: Product) => {
      this.sumSelectedProduct = m;
    });
  }
}
