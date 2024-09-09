import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  deleteSelectedProduct(id: number) {
    throw new Error('Method not implemented.');
  }

  private selectedProductPage$ = new Subject<Product>();

  selectedProductPage = this.selectedProductPage$.asObservable();
  setSelectedProducts: any;
  selectedProduct: any;

  setSelectedProductPage(val: Product) {
    this.selectedProductPage$.next(val);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<any>('/services1/products');
  }

  getProduct(id: number): Observable<Product[]> {
    return this.http.get<any>(`/services1/products/${id.toString()}`);
  }  
  
  addProduct(newItem: Product): Observable<Product> {
    return this.http.post<any>(`/servre1/product`, newItem);
  }
  updateProduct(item: Product): Observable<Product> {
    return this.http.put<any>(`/servre1/product`, item);
  }

  deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<any>(`/servre1/product/${id.toString()}`);
  }

  getSelectedProducts() : Observable<Product[]> {
    return this.http.get<any>('/services1/checkout');
  }
  
}
