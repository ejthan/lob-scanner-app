import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Catalog } from './catalog.model';

export interface CatalogState extends EntityState<Catalog> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'catalog' })
export class CatalogStore extends EntityStore<CatalogState> {

  constructor() {
    super();
  }

}
