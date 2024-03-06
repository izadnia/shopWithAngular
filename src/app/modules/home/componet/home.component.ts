import { Component } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

constructor( ){}
productList: Product[] = [];

ngOnInit(): void {

}



}
