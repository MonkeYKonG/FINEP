import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { Contract } from '../../models/contract';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  _profile: User;
  _comments: Array<any>;
  _contrats: Contract[] = [];

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.get('profile/' + this.activeRoute.snapshot.params['id']).subscribe(data => {
      console.log(data);
    });
  }

}
