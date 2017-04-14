/**
 * Created by kadoufall on 2017/4/13.
 */
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {User} from './user';
import {UserService} from './user-service';
import {UserChangeService} from './user-change-service';
import {Subscription}   from 'rxjs/Subscription';

@Component({
  selector: 'user-list',
  template: `
    <ul class="users">
      <li *ngFor="let user of users"
          (click)="gotoDetail(user)">
        <span class="badge">{{user.id}}</span> {{user.name}}
      </li>
    </ul>
  `,
})

export class UserListComponent implements OnDestroy, OnInit {
  users: User[];
  subscription: Subscription;

  constructor(private userService: UserService, private userChangeService: UserChangeService, private router: Router) {
    this.subscription = userChangeService.userCreate$.subscribe(
      user => {
        this.users.push(user);
      }
    );
  }

  ngOnInit(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  /*
   trackByUsers(index: number, user: User){
   return user.id;
   }
   */

  ngOnDestroy(): void {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  gotoDetail(user: User) {
    this.router.navigate(['/detail', user.id]);
  }

}
