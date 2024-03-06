import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  private selectedProductPage$ = new Subject<Product>();

  selectedProductPage = this.selectedProductPage$.asObservable();
  setSelectedProducts: any;
  selectedProduct: any;

  setSelectedProductPage(val: Product) {
    this.selectedProductPage$.next(val);
  }
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any>('/services1/products');
  }

  getProduct(id: number): Observable<Product[]> {
    return this.http.get<any>(`/services1/products/${id.toString()}`);
  }
}
