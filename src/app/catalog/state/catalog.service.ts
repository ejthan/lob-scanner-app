import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Catalog } from './catalog.model';
import { CatalogStore } from './catalog.store';

@Injectable({ providedIn: 'root' })
export class CatalogService {

  constructor(private catalogStore: CatalogStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Catalog[]>('http://localhost:3000/groups').pipe(tap(entities => {
      this.catalogStore.set(entities);
    }));
  }

  add(catalog: Catalog) {
    this.catalogStore.add(catalog);
  }

  update(id, catalog: Partial<Catalog>) {
    this.catalogStore.update(id, catalog);
  }

  remove(id: ID) {
    this.catalogStore.remove(id);
  }

}
