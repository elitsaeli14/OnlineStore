import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { TV } from '../tv';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  television;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService)
   {}

  addToCart(television) {
    window.alert('Your TV has been added to the cart!');
    this.cartService.addToCart(television);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.television = TV[+params.get('televisionId')];
    });
  }

}
