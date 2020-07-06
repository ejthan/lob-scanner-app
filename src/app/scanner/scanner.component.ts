import { Component, OnInit, ViewEncapsulation, ViewChild, OnDestroy } from '@angular/core';

import { BaseComponent } from 'lob-base';
import { BeepService } from '../core/services/beep.service';
import { ShoppingCartService } from '../state/shopping-cart.service';
import { ShoppingCartQuery } from '../state/shopping-cart.query';
import { ShoppingCart, createShoppingCart } from '../state/shopping-cart.model';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScannerComponent extends BaseComponent implements OnInit, OnDestroy {

  cartItems$: Observable<ShoppingCart[]> = this.shoppingCartQuery.selectAll();

  constructor(
    private beepService: BeepService,
    public shoppingCartService: ShoppingCartService,
    private shoppingCartQuery: ShoppingCartQuery
  ) {
    super();
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
