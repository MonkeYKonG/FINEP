import { Injectable, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserInfoService } from './user-info.service';
import { TestDialogComponent } from '../dialog/test-dialog/test-dialog.component';
import { InvestmentDialogComponent } from '../dialog/investment-dialog/investment-dialog.component';

@Injectable()
export class InvestmentService {

  constructor(private userInfoSrv: UserInfoService, private dialog: MatDialog) {
    console.log(userInfoSrv.user);
   }

   test_invest() {
     console.log(this.userInfoSrv.user);
     const dialogRef = this.dialog.open(InvestmentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
   }

}
