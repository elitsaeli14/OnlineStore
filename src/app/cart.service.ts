import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  articles = [];

  addToCart(article) {
    this.articles.push(article);
  }

  getArticles() {
    return this.articles;
  }

  clearCart() {
    this.articles = [];
    return this.articles;
  }

  constructor() { }
}
