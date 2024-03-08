import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../../../models/product';
import { ProductService } from '../../../../../services/product.service';

@Component({
  selector: 'app-dashboard-single-page-edit',
  templateUrl: './dashboard-single-page-edit.component.html',
  styleUrl: './dashboard-single-page-edit.component.scss',
})
export class DashboardSinglePageEditComponent {
  constructor(
    private rout: ActivatedRoute,
    private productService: ProductService
  ) {}
  product: Product;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.rout.params.subscribe((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.productService.getProduct(id).subscribe((data: any) => {
          this.product = data;
        });
      }
    });
  }
}
