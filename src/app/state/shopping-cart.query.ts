import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ShoppingCartStore, ShoppingCartState } from './shopping-cart.store';

@Injectable({ providedIn: 'root' })
export class ShoppingCartQuery extends QueryEntity<ShoppingCartState> {

  constructor(protected store: ShoppingCartStore) {
    super(store);
  }

}
