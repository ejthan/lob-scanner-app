import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, CatalogRoutingModule, MatListModule],
})
export class CatalogModule {}
