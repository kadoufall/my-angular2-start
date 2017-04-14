/**
 * Created by kadoufall on 2017/4/13.
 */
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {User} from './user';


@Injectable()
export class UserChangeService {
  private userCreateSource = new Subject<User>();

  userCreate$ = this.userCreateSource.asObservable();

  createUser(user: User) {
    this.userCreateSource.next(user);
  }

}
