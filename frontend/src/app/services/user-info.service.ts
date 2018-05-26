import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserInfoService {
  user: User = new User();

  constructor(private api: ApiService) { }

  GetUserData(id: string): Observable<User> {
    const obs = this.api.get('users');

    obs.subscribe(data => {
      this.user.name = 'test value';
      console.log(data);
    }, err => console.log(err));
    return obs;
  }

}
