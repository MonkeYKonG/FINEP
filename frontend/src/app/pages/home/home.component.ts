import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { User, SignInUser } from '../../models/user';
import { Contract } from '../../models/contract';
import { Investment } from '../../models/investment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signin: SignInUser = new SignInUser();
  signup: User = new User();
  users: Array<User> = [];

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.apiService.get('users').subscribe((data: Array<User>) => {
      this.users = data;
      console.log('/users : ', this.users);
    });
  }

  submitSignIn() {
    this.apiService.post('users/signin', this.signin).subscribe((data: any) => {
      console.log('sign in : ', data);
    });
  }

  submitSignUp() {
    this.apiService.post('users/signup', this.signup).subscribe((data: any) => {
      console.log('sign up : ', data);
    });
  }

}
