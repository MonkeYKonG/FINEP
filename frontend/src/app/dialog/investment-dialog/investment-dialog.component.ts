import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-investment-dialog',
  templateUrl: './investment-dialog.component.html',
  styleUrls: ['./investment-dialog.component.css']
})
export class InvestmentDialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
