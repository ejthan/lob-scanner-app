import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then(m => m.ScannerModule)
  },
  {
    path: 'quagga',
    loadChildren: () => import('./scanner-quagga/scanner-quagga.module').then(m => m.ScannerQuaggaModule)
  },
  { path: '',   redirectTo: '/scanner', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
