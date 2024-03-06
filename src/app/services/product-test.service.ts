import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductTestService {
  constructor() {}

  //************* لیست محصولات ********** */
  productList: Product[] = [
    { id: 1, title: 'گوجه فرنگی', price: 800, expireDate: 1710494434248 },
    { id: 2, title: 'پیاز', price: 700, expireDate: 1715494434248 },
    { id: 3, title: 'سیب زمینی', price: 500, expireDate: 1729494434248 },
    { id: 4, title: 'سیب', price: 400, expireDate: 1729494434248 },
    { id: 5, title: 'خیار رسمی', price: 100, expireDate: 1719494434248 },
    { id: 6, title: 'خیار سالادی', price: 100, expireDate: 1719494434248 },
    { id: 7, title: 'کلم', price: 300, expireDate: 1713494434248 },
    { id: 8, title: 'کاهو', price: 400, expireDate: 1711494434248 },
    { id: 9, title: 'کلم سفید', price: 800, expireDate: 1714494434248 },
  ];
  //************************************** */

  // ******** دریافت لیست محصولات ******** */
  //
  // تعریف کلاس : Observable
  // ورودی : -
  // خروجی : Products List
  // توضیحات :
  // تمامی محصولات به صورت لیست پاسخ داده می شود
  //
  getProducts(): Observable<Product[]> {
    return of(this.productList);
  }
  /*************************************** */

  // ********** دریافت یک محصول ********** */
  //
  // تعریف کلاس : Observable
  // ورودی : Product ID
  // خروجی : Product As an Object
  // توضیحات :
  // شناسه کالا دریافت و مشخصات کالا پاسخ داده می شود
  //
  getProduct(id: number): Observable<Product> {
    return of(this.productList.filter((m) => m.id == id)[0]);
  }
  //************************************** */

  // ******* صفحه ی کالا انتخاب شده ******* */
  //
  // تعریف کلاس : BehaviorSubject
  // ورودی : Product ID
  // خروجی : Product ID
  // توضیحات :
  // مقادیر ورودی با مقادیر قبلی جایگزین می شوند
  //
  private selectedProductPage$ = new BehaviorSubject<Product>(new Product());
  selectedProductPage = this.selectedProductPage$.asObservable();
  setSelectedProductPage(val: Product) {
    this.selectedProductPage$.next(val);
  }
  // ************************************** */

    // ****** جمع کالا های انتخاب شده ******** */
  //
  // تعریف کلاس : BehaviorSubject
  // ورودی : Product ID
  // خروجی : Selected Products Array
  // توضیحات :
  //  1 : آیدی محصول را دریافت
  //  2 : محصول مورد نظر را از آرایه انتخاب کرده
  //  3 : به آرایه محصولات انتخاب شده توسط کاربر اضافه می کند
  //
  //
  // private selectedProducts$ = new BehaviorSubject<Product>(new Product());
  // selectedProducts = this.selectedProducts$.asObservable();
  // setSelectedProducts(val: Product) {
  //   let _val = this.productList.filter((m) => m.id == val.id)[0];
  //   this.selectedProducts$.next(_val);
  // }
  // *************************************** */
}
