import { Injectable } from '@angular/core';
import { ShoppingCart } from './shopping-cart.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ShoppingCartState extends EntityState<ShoppingCart> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'shopping-cart', resettable: true })
export class ShoppingCartStore extends EntityStore<ShoppingCartState> {

  constructor() {
    super();
  }

}

