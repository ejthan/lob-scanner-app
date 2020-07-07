import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppUpdateService } from './services/app-update.service';
import { BeepService } from './services/beep.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    AppUpdateService,
    BeepService
  ]
})
export class CoreModule { }
