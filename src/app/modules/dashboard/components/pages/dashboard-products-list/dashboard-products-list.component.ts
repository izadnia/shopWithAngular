import { Component } from '@angular/core';
import { Product } from '../../../../../models/product';
import { ProductService } from '../../../../../services/product.service';

@Component({
  selector: 'app-dashboard-products-list',
  templateUrl: './dashboard-products-list.component.html',
  styleUrl: './dashboard-products-list.component.scss',
})
export class DashboardProductsListComponent {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProducts();
    
  }

  productslist: Product[];
  titlePlaceholder: string = 'نام؟';
  pricePlaceholder: string = 'فی؟';
  categoryPlaceholder: string = 'دسته؟';
  filter: any = {
    title: '',
    price: 1000,
    category: '',
    expireDate: 0,
  };
  removeAllFilters() {
    this.filter.title = '';
    this.filter.price = 1000;
    this.filter.category = '';
  }
  getProducts() {
    this.productService.getProducts().subscribe((m) => (this.productslist = m));
  }
}
