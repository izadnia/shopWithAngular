import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../../../models/product';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
})
export class SingleProductComponent {
  constructor(
    private rout: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}
  // @Input() product: Product = new Product();

  subscription: any;
  product: any;

  ngOnInit(): void {
    this.subscription = this.productService.selectedProductPage.subscribe(
      (data) => {
        if (!data?.id) return;
        this.productService
          .getProduct(data.id)
          .subscribe((data) => (this.product = data));
      }
    );

    // this.rout.params.subscribe((params: Params) => {
    //   let id = +params['id'];
    //   if (id) {
    //     this.productService.getProdcut(id).subscribe((data:Product) => {
    //       this.product = data;
    //     });
    //   }
    // });
  }
  goToCheckOut() {
    this.router.navigate(['checkout']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
