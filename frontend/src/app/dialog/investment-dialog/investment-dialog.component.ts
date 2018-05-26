import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-investment-dialog',
  templateUrl: './investment-dialog.component.html',
  styleUrls: ['./investment-dialog.component.css']
})
export class InvestmentDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<InvestmentDialogComponent>) { }

  ngOnInit() {
  }

  ValidInvestment() {
    console.log('invesment validate!');
    this.dialogRef.close({test: 'salut'});
  }

}
