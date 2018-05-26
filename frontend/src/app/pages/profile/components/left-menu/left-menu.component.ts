import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../../models/user';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
    if (!this.user) {
      this.user = new User();
    }
  }

}
