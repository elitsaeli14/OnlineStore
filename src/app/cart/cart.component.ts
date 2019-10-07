import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  articles;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.articles = this.cartService.getArticles();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      address: ''
    });
  }

  submit(formData) {
    console.warn('Your order has been submitted', formData);
    this.articles = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
