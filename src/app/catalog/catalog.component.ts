import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { CatalogService } from './state/catalog.service';
import { CatalogQuery } from './state/catalog.query';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {

  parentGroup: any;

  catalog;

  groupByLevel: any;

  groupBreadcrumb = [];

  constructor(
    private catalogService: CatalogService,
    private catalogQuery: CatalogQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.catalogService.get().subscribe();
    this.parentGroup = this.route.snapshot.params.parentGroupId;

    this.catalogQuery.selectAll()
      .pipe(
        switchMap((data) => (data.length > 0 ? this.catalog = data : empty())),
        map((group) => group.children)
      )
      .subscribe((groups) => {
        this.groupByLevel = groups;
      });
  }

  navItemClicked(item): void {
    this.groupBreadcrumb.push(item);
    this.parentGroup = this.groupByLevel;
    this.groupByLevel = item.children;
  }

  parentNavItemClicked(item, index) {
    if (index === 0) {
      this.groupByLevel = this.catalog[0].children;
      this.groupBreadcrumb = [];
    }
  }
}
