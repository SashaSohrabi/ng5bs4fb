import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$;
  shoppingCartItemCount: number;
  productTitles: string[] = [];
  productQuantities: number[] = [];
  productPrice: number[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  get totalPrice() {
    let sum = 0;
    for (let i = 0; i < this.productQuantities.length; i++) {
      sum += this.productQuantities[i] * this.productPrice[i];
    }
    return sum;
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.cart$.subscribe(cart => {
      this.shoppingCartItemCount = 0;
      for (let productId in cart.items) {
        this.shoppingCartItemCount += cart.items[productId].quantity;
        this.productQuantities.push(cart.items[productId].quantity);
        this.productTitles.push(cart.items[productId].product.title);
        this.productPrice.push(cart.items[productId].product.price);
      }
    });
  }

}
