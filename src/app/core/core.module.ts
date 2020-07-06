import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { AppUpdateService } from './services/app-update.service';
import { BeepService } from './services/beep.service';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';

@NgModule({
  declarations: [UpdateDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
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
