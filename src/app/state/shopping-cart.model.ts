import { ID, guid } from '@datorama/akita';

export interface ShoppingCart {
  id: ID;
  ean: string;
  quantity: number;
}

export function createShoppingCart(params: Partial<ShoppingCart>) {
  return {
    id: guid(),
    ean: params.ean || null,
    quantity: 1
  } as ShoppingCart;
}
