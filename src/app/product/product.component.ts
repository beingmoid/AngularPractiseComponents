import { Component, OnInit } from '@angular/core';
import {  Product} from "../Model/product";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  product:Product[];
  sortField='ProducPrice';
  sortDirection='';

  ngOnInit(): void {
    this.product = [
      {
        ProductImage:"https://images-na.ssl-images-amazon.com/images/I/41x50GoBl3L._AC_.jpg",
        ProductName:"Handsfree",
        ProductDescription:"tHIS IS A VARY USEFUL PRODUCT",
        ProducPrice:3000
      },
      {
        ProductImage:"https://cf.ltkcdn.net/save/images/orig/145833-800x600-trial_products.jpg",
        ProductName:"drone",
        ProductDescription:"tHIS IS A VARY USEFUL PRODUCT",
        ProducPrice:799900
      },
      {
        ProductImage:"https://images-na.ssl-images-amazon.com/images/I/41x50GoBl3L._AC_.jpg",
        ProductName:"Laptop",
        ProductDescription:"tHIS IS A VARY USEFUL PRODUCT",
        ProducPrice:130
      },
      {
        ProductImage:"https://images-na.ssl-images-amazon.com/images/I/71131Gm67rL._AC_SL1500_.jpg",
        ProductName:"Drone",
        ProductDescription:"tHIS IS A VARY USEFUL PRODUCT",
        ProducPrice:7800
      }
    ]
  }
  SortSelection(e){
    if(e.target.value==1)
      this.sortDirection='desc'
    else 
      this.sortDirection='';
  }

}
