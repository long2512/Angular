import { Component } from '@angular/core';
import mokData from 'src/data';
import { IProduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList :IProduct[] = mokData;
  onHandleAdd(product:any){
    this.productList.push(product)
  }
  

  }
