import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { UpdateDialogComponent } from '../components/update-dialog/update-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {

  constructor(
    private readonly updates: SwUpdate,
    public dialog: MatDialog
  ) {
    this.updates.available.subscribe(event => {
      this.showAppUpdateAlert();
    });
  }

  showAppUpdateAlert(): void {

    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '80vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.doAppUpdate();
    });
  }

  doAppUpdate(): void {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
