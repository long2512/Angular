import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sum22';
  productName: string = "Product A";
  productPrice: number = 10;
  productStatus: boolean = false;
  productInfo: { id: number, price: number, name: string } = {
    id: 1,
    name: "product A",
    price: 200
  };

  productList: { id: number, price: number, name: string, status: boolean }[] = [
    {
      id: 1,
      name: "product A",
      price: 200,
      status: false
    },
    {
      id: 2,
      name: "product B",
      price: 300,
      status: true
    },
    {
      id: 3,
      name: "product B",
      price: 400,
      status: true
    },
    {
      id: 4,
      name: "product B",
      price: 500,
      status: false
    }
  ]
}
