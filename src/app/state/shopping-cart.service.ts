import { Injectable } from '@angular/core';

import { ShoppingCartStore } from './shopping-cart.store';
import { ShoppingCart } from './shopping-cart.model';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService  {

  constructor(private shoppingCartStore: ShoppingCartStore) {
  }

  add(model: ShoppingCart): void {
    this.shoppingCartStore.add(model);
  }

  clearStore(): void {
    this.shoppingCartStore.reset();
  }
}
