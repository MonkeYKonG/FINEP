import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserInfoService } from '../../services/user-info.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string;
  userData: User = new User();

  constructor(
    private route: ActivatedRoute,
    private userInfoService: UserInfoService) {
      this.userData.name = 'NAME';
      this.userData.pseudo = 'PSEUDO';
      this.userData.capital = 42;
     }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userInfoService.GetUserData(this.id).subscribe((userData) => {
      console.log('UserData: ', userData);
      // this.userData = userData;
    },
  (err) => {
    console.error('error: ', err);
  });
  }

}
