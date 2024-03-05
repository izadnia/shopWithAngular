import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../../../models/product';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [NgbModalConfig, NgbModal],
})
export class ProductComponent {
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private router: Router,
    private productService : ProductService
   
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }
  imageSrc: string = '';

  ngOnInit(): void {
    this.imageSrc = 'assets/img/' + this.product.id + '.jpg';
  }
  @Input() product: Product;
  @Output() onProductSelect = new EventEmitter<Product>();

  selectProduct() {
    this.onProductSelect.emit(this.product);
   
  }
  selectProductPage(item: Product) {
    this.productService.setSelectedProductPage(item);
    this.router.navigate(['products/fruit', item.id]);
  }
}
