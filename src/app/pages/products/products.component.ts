import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productDetails = [
    {
      id: 1,
      productImg: "../../../assets/gym.jpeg",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    },

    {
      id: 1,
      productImg: "acbd",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    },

    {
      id: 1,
      productImg: "acbd",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    },

    {
      id: 1,
      productImg: "acbd",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    },

    {
      id: 1,
      productImg: "acbd",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    },

    {
      id: 1,
      productImg: "acbd",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    },

    {
      id: 1,
      productImg: "acbd",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    },

    {
      id: 1,
      productImg: "acbd",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    },

    {
      id: 1,
      productImg: "acbd",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    },

    {
      id: 1,
      productImg: "acbd",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    },

    {
      id: 1,
      productImg: "acbd",
      productName: "abc",
      productDescription: "this is a product",
      productPrice: 100
    }
  ]

}
