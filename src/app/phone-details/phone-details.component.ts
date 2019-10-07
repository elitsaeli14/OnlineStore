import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { PHONE } from '../phone';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  phone;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService)
   {}

  addToCart(phone) {
    window.alert('Your smartphone has been added to the cart!');
    this.cartService.addToCart(phone);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.phone = PHONE[+params.get('phoneId')];
    });
  }

}
