import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';

import Quagga from 'quagga';
import { BaseComponent } from 'lob-base';
import { BeepService } from '../services/beep.service';
import { ShoppingCartService } from '../state/shopping-cart.service';
import { ShoppingCartQuery } from '../state/shopping-cart.query';
import { ShoppingCart, createShoppingCart } from '../state/shopping-cart.model';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-scanner-quagga',
  templateUrl: './scanner-quagga.component.html',
  styleUrls: ['./scanner-quagga.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScannerQuaggaComponent extends BaseComponent implements AfterViewInit {

  cartItems$: Observable<ShoppingCart[]> = this.shoppingCartQuery.selectAll();

  private lastScannedCode: string;

  private lastScannedCodeDate: number;

  constructor(
    private beepService: BeepService,
    public shoppingCartService: ShoppingCartService,
    private shoppingCartQuery: ShoppingCartQuery
  ) {
    super();
    this.shoppingCartService.clearStore();
  }

  ngAfterViewInit(): void {
    Quagga.init({
      inputStream: {
        constraints: {
          facingMode: 'environment'
        },
        area: { // defines rectangle of the detection/localization area
          top: '40%',    // top offset
          right: '0%',  // right offset
          left: '0%',   // left offset
          bottom: '40%'  // bottom offset
        },
      },
      decoder: {
        readers: ['ean_reader']
      },
    },
      (err) => {
        if (err) {
          console.log(`QuaggaJS could not be initialized, err: ${err}`);
        } else {
          Quagga.start();
          Quagga.onDetected((res) => {
            const now = new Date().getTime();
            if (res.codeResult.code === this.lastScannedCode && (now < this.lastScannedCodeDate + 1500)) {
              return;
            }
            this.scanSuccessHandler(res.codeResult.code);
            this.lastScannedCode = res.codeResult.code;
            this.lastScannedCodeDate = now;
          });
        }
      });
  }

  scanSuccessHandler(event): void {
    console.log(event);
    const newItem = createShoppingCart({ ean: event });
    this.shoppingCartService.add(newItem);

    this.beepService.beep();
    console.log(newItem);
  }

}
