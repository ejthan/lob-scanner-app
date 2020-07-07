import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BeepService } from '../core/services/beep.service';
import { ShoppingCartService } from '../state/shopping-cart.service';
import { ShoppingCartQuery } from '../state/shopping-cart.query';
import { ShoppingCart, createShoppingCart } from '../state/shopping-cart.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScannerComponent implements OnInit {

  cartItems$: Observable<ShoppingCart[]> = this.shoppingCartQuery.selectAll();

  constructor(
    private beepService: BeepService,
    public shoppingCartService: ShoppingCartService,
    private shoppingCartQuery: ShoppingCartQuery
  ) {
  }

  ngOnInit(): void {
    this.shoppingCartService.clearStore();
  }

  scanSuccessHandler(event): void {
    console.log(event);
    const newItem = createShoppingCart({ ean: event });
    this.shoppingCartService.add(newItem);

    this.beepService.beep();
    console.log(newItem);
  }

}
