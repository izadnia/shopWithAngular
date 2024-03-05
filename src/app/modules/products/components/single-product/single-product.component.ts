import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
})
export class SingleProductComponent {
  constructor(private rout: ActivatedRoute) {}
  @Input() product: Product = new Product();

  ngOnInit(): void {
    this.rout.params.subscribe((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.product = this.productList.filter((m)=>m.id == id)[0];
      }

    });
  }
  productList: Product[] = [
    { id: 1, title: 'گوجه فرنگی', price: 300, expireDate: 1710494434248 },
    { id: 2, title: 'پیاز', price: 300, expireDate: 1715494434248 },
    { id: 3, title: 'سیب زمینی', price: 200, expireDate: 1729494434248 },
    { id: 4, title: 'سیب', price: 400, expireDate: 1729494434248 },
    { id: 5, title: 'خیار رسمی', price: 100, expireDate: 1719494434248 },
    { id: 6, title: 'خیار سالادی', price: 100, expireDate: 1719494434248 },
    { id: 7, title: 'کلم', price: 300, expireDate: 1713494434248 },
    { id: 8, title: 'کاهو', price: 400, expireDate: 1711494434248 },
    { id: 9, title: 'کلم سفید', price: 800, expireDate: 1714494434248 },
  ];
}
