import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../../models/product';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.scss',
})
export class ProductsHeaderComponent {
  @Output() filterChanged: EventEmitter<Product> = new EventEmitter<Product>();
  @Input() filterApplied: Product = new Product();

  filter: any = {
    title: '',
    price: 1000,
    category: '',
    expireDate: 0,
  };

  removeTitle() {
    this.filterApplied.title = '';
    this.filterChanged.emit(this.filterApplied);
  }
  removePrice() {
    this.filterApplied.price = 1000;
    this.filterChanged.emit(this.filterApplied);
  }
  removeCategory() {
    this.filterApplied.category = '';
    this.filterChanged.emit(this.filterApplied);
  }
  removeAllFlag() {
    if (
      this.filterApplied.category?.length > 0 ||
      this.filterApplied.title?.length > 0 ||
      this.filterApplied?.price < 1000
    ) {
      return true;
    }
    return false;
  }
  removeAll() {
    this.filterApplied.title = '';
    this.filterApplied.price = 1000;
    this.filterApplied.category = '';
    this.filterChanged.emit(this.filterApplied);
  }
}
