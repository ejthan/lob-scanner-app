import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {

  constructor(
    private readonly updates: SwUpdate,
    private _snackBar: MatSnackBar
  ) {
    this.updates.available.subscribe(event => {
      this.showAppUpdateAlert();
    });
  }

  showAppUpdateAlert(): void {
    const snackBarRef = this._snackBar.open('Please update the catalog to the newest version', 'Update', { duration: 5000 });
    snackBarRef.onAction().subscribe(() => this.doAppUpdate());
  }

  doAppUpdate(): void {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
