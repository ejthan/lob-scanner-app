import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CatalogStore, CatalogState } from './catalog.store';
import { Observable } from 'rxjs';
import { Catalog } from './catalog.model';

@Injectable({ providedIn: 'root' })
export class CatalogQuery extends QueryEntity<CatalogState> {

  constructor(protected store: CatalogStore) {
    super(store);
  }

  // getByParentGroup(parentGroupId): Observable<Catalog[]> {
  //   return this.selectAll({
  //     filterBy: (entity) => entity.id === parentGroupId
  //   });
  // }

}
