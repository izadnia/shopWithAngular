import { Component } from '@angular/core';
import { Product } from '../../../../../models/product';

@Component({
  selector: 'app-dashboard-post-product',
  templateUrl: './dashboard-post-product.component.html',
  styleUrl: './dashboard-post-product.component.scss'
})

export class DashboardPostProductComponent {


  productModel : any ={
    title: '',
    price: undefined,
    category: 'میوه',
    expireDate: '1720068213258'
  }



  

}
