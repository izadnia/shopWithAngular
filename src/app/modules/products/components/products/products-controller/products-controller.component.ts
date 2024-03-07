import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../../../models/product';

@Component({
  selector: 'app-products-controller',
  templateUrl: './products-controller.component.html',
  styleUrl: './products-controller.component.scss',
})
export class ProductsControllerComponent {
  @Output() filterChanged: EventEmitter<any> = new EventEmitter<any>();
  titleIsCollapsed = false;
  priceIsCollapsed = false;
  categoryIsCollapsed = false;
  expireDateIsCollapsed = false;
  inputSearchLabel: string = 'نام محصول';
  filter: any = {
    title: '',
    price: 1000,
    category: '',
    expireDate: 0,
  };
  onFilterChange() {
    this.filterChanged.emit(this.filter);
  }
}
