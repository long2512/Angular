import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product :IProduct={
    name: "",
    price: 0,
    id: 0,
    status: false
  }
  constructor(private productService: ProductService,private routes:Router) { }

  ngOnInit(): void {
  }
  // Submithand(){
  //   console.log("submit")
  //   console.log(this.product)
  //   this.onAdd.emit(this.product)
  // }
  onSubmit() {
    this.productService.addProduct(this.product).subscribe(data=>{
      this.product = data
      this.routes.navigate(["/products"])
    })
  }
}
