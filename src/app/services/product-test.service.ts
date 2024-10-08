import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductTestService {
  constructor() {}

  /************ سبد خرید  */
  checkOutList: Product[] = [];
  /*********************** */

  //************* لیست محصولات ********** */
  productList: Product[] = [
    {
      id: 1,
      category: 'صیفی',
      title: 'گوجه فرنگی',
      price: 200,
      expireDate: 1710494434248,
    },
    {
      id: 2,
      category: 'صیفی',
      title: 'پیاز',
      price: 170,
      expireDate: 1715494434248,
    },
    {
      id: 3,
      category: 'صیفی',
      title: 'سیب زمینی',
      price: 150,
      expireDate: 1729494434248,
    },
    {
      id: 4,
      category: 'میوه',
      title: 'سیب',
      price: 380,
      expireDate: 1729494434248,
    },
    {
      id: 5,
      category: 'صیفی',
      title: 'خیار رسمی',
      price: 180,
      expireDate: 1719494434248,
    },
    {
      id: 6,
      category: 'صیفی',
      title: 'خیار سالادی',
      price: 100,
      expireDate: 1719494434248,
    },
    {
      id: 7,
      category: 'صیفی',
      title: 'کلم',
      price: 160,
      expireDate: 1713494434248,
    },
    {
      id: 8,
      category: 'صیفی',
      title: 'کاهو',
      price: 220,
      expireDate: 1711494434248,
    },
    {
      id: 9,
      category: 'صیفی',
      title: 'کلم سفید',
      price: 210,
      expireDate: 1714494434248,
    },
    {
      id: 10,
      category: 'میوه',
      title: 'هلو',
      price: 450,
      expireDate: 1714494434248,
    },
    {
      id: 11,
      category: 'میوه',
      title: 'گلابی',
      price: 700,
      expireDate: 1714494434248,
    },
    {
      id: 12,
      category: 'میوه',
      title: 'کیوی',
      price: 390,
      expireDate: 1714494434248,
    },
    {
      id: 13,
      category: 'میوه',
      title: 'پرتغال',
      price: 400,
      expireDate: 1714494434248,
    },
    {
      id: 14,
      category: 'میوه',
      title: 'نارنگی',
      price: 420,
      expireDate: 1714494434248,
    },
    {
      id: 15,
      category: 'میوه',
      title: 'هندوانه',
      price: 70,
      expireDate: 1714494434248,
    },
  ];
  /************تمامی محصولات */
  getProducts(): Observable<Product[]> {
    return of(this.productList);
  }
  /************** صفحه ی محصول */
  getProduct(id: number): Observable<Product> {
    return of(this.productList.filter((m) => m.id == id)[0]);
  }

  /************** سرویس های کاربر ****************/
  //
  /************محصولات انتخاب شده توسط کاربر */
  getSelectedProducts(): Observable<Product[]> {
    return of(this.checkOutList);
  }
  /************پاک کردن محصول از سبد خرید توسط کاربر */
  deleteSelectedProduct(id: number): Observable<any> {
    let index = this.checkOutList.findIndex((m) => m.id == id);
    this.checkOutList.splice(index, 1);
    return of(this.checkOutList);
  }
  /************** انتخاب صفحه توسط کاربر */
  private selectedProductPage$ = new BehaviorSubject<Product>(new Product());
  selectedProductPage = this.selectedProductPage$.asObservable();
  setSelectedProductPage(val: Product) {
    console.log('hi');
    this.selectedProductPage$.next(val);
  }
  /************** انتخاب محصول توسط کاربر  */
  setSelectedProducts(id: number) {
    let object = this.productList.filter((m) => m.id == id)[0];
    let existFlag = this.checkOutList.filter((m) => m.id == id)[0];
    if (!existFlag) {
      this.checkOutList.push(object);
      alert(`${object.title} با موفقیت به سبد خرید اضافه شد`);
    } else {
      alert(`${existFlag.title} قبلا به سبد خرید اضافه شده است`);
    }
  }
  /********************************************** */

  /***************سرویس های ادمین ****************/
  //
  //

  addProduct(newItem: Product): Observable<Product[]> {
    let LastItem = this.productList[this.productList.length - 1];
    newItem.id = LastItem.id + 1;
    this.productList.push(newItem);
    this.getProducts();
    return of(this.productList);
  }
}
