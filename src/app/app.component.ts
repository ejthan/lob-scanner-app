import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppUpdateService } from './core/services/app-update.service';
import { CatalogService } from './catalog/state/catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showFiller = false;

  constructor(
    private router: Router,
    private appUpdateService: AppUpdateService,
    private catalogService: CatalogService
  ) {

  }

  ngOnInit(): void {
    this.catalogService.get().subscribe();
  }

  transitionToRoute(path: string): void {
    this.router.navigate([`/${path}`]);
  }
}
