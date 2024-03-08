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
  // onfilterChanged() {
  //   this.filterChanged.emit(this.filter);
  // }
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
  removeAll() {
    this.filterApplied.title = '';
    this.filterApplied.price = 1000;
    this.filterApplied.category = '';
    this.filterChanged.emit(this.filterApplied);
  }
}
