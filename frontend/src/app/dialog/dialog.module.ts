import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDialogComponent } from './test-dialog/test-dialog.component';
import { InvestmentDialogComponent } from './investment-dialog/investment-dialog.component';
import { DialogService } from '../services/dialog.service';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [
    TestDialogComponent,
    InvestmentDialogComponent
  ],
  exports: [
    TestDialogComponent,
    InvestmentDialogComponent
  ],
  entryComponents: [
    InvestmentDialogComponent
  ],
  providers: [DialogService]
})
export class DialogModule { }
