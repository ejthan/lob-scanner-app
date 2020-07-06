import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppUpdateService } from './services/app-update.service';
import { BeepService } from './services/beep.service';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';

@NgModule({
  declarations: [UpdateDialogComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  entryComponents: [
    UpdateDialogComponent
  ],
  providers: [
    AppUpdateService,
    BeepService
  ]
})
export class CoreModule { }
