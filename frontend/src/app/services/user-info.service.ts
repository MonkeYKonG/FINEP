import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserInfoService {

  constructor(private api: ApiService) { }

  GetUserData(id: string): Observable<User> {
    return this.api.get('users');
  }

}
