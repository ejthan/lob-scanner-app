import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerQuaggaComponent } from './scanner-quagga.component';

import { MatListModule } from '@angular/material/list';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ScannerQuaggaComponent
  }
];

@NgModule({
  declarations: [ScannerQuaggaComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule.forChild(routes)
  ]
})
export class ScannerQuaggaModule { }
