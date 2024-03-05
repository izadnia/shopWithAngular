import { Component } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  inputSearchLabel: string = 'جست و جو';
  selectedProduct: Product = new Product();
  filter : Product = new Product();
  ngOnInit(): void {
    this.filter.price = 1000
  }

  productList: Product[] = [
    { id: 1, title: 'گوجه فرنگی', price: 800, expireDate: 1710494434248 },
    { id: 2, title: 'پیاز', price: 700, expireDate: 1715494434248 },
    { id: 3, title: 'سیب زمینی', price: 500, expireDate: 1729494434248 },
    { id: 4, title: 'سیب', price: 400, expireDate: 1729494434248 },
    { id: 5, title: 'خیار رسمی', price: 100, expireDate: 1719494434248 },
    { id: 6, title: 'خیار سالادی', price: 100, expireDate: 1719494434248 },
    { id: 7, title: 'کلم', price: 300, expireDate: 1713494434248 },
    { id: 8, title: 'کاهو', price: 400, expireDate: 1711494434248 },
    { id: 9, title: 'کلم سفید', price: 800, expireDate: 1714494434248 },
  ];
  selectProduct(item: Product) {
    this.selectedProduct = item;
  }
}
