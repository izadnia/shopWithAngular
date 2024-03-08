import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-products-controller',
  templateUrl: './products-controller.component.html',
  styleUrl: './products-controller.component.scss',
})
export class ProductsControllerComponent {
  @Output() filterChanged: EventEmitter<any> = new EventEmitter<any>();
  titleIsCollapsed = true;
  priceIsCollapsed = true;
  categoryIsCollapsed = false;
  expireDateIsCollapsed = true;
  inputSearchLabel: string = 'جست و جو';
  filter: any = {
    title: '',
    price: 1000,
    category: '',
    expireDate: 0,
  };
  onFilterChange() {
    this.filterChanged.emit(this.filter);
  }
  onCategoryChange(value: string) {
    this.filter.category = value;
    this.onFilterChange();
  }
}
