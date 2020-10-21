import { Component, OnInit } from '@angular/core';

//this package will allow me to take the value from the url.
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //ein ganzes Produkt wird in product gespeichert = ProduktId wird genutzt
      //um ein richtiges Produkt zu finden
      this.product = products[+params.get('productId')];
     });
  }

}
