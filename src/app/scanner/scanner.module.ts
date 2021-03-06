import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list';

import { ScannerComponent } from './scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

const routes: Routes = [
  {
    path: '',
    component: ScannerComponent
  }
];

@NgModule({
  declarations: [ScannerComponent],
  imports: [
    CommonModule,
    MatListModule,
    ZXingScannerModule,
    RouterModule.forChild(routes)
  ]
})
export class ScannerModule { }
