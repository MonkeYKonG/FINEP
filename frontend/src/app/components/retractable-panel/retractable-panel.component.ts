import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-retractable-panel',
  templateUrl: './retractable-panel.component.html',
  styleUrls: ['./retractable-panel.component.css']
})
export class RetractablePanelComponent implements OnInit {

  @Input('isOpen') isOpen;
  @Input('title') title;
  @Output() openClick = new EventEmitter<any>();

  buttonClicked() {
    this.openClick.emit();
  }

  constructor() {
    this.isOpen = true;
  }

  ngOnInit() {
  }

}
