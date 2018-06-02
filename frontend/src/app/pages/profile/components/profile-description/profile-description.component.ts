import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.css']
})
export class ProfileDescriptionComponent implements OnInit {

  @Input() body: string;

  constructor() { }

  ngOnInit() {
    if (!this.body) {
      this.body = 'no value';
    }
  }

}
