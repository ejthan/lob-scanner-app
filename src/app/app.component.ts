import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {AppUpdateService} from './core/services/app-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showFiller = false;

  constructor(
    private router: Router,
    private appUpdateService: AppUpdateService) {

  }

  transitionToRoute(path: string): void {
    this.router.navigate([`/${path}`]);
  }
}
