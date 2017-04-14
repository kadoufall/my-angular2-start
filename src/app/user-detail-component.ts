/**
 * Created by kadoufall on 2017/4/13.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {UserService} from './user-service';
import {User} from './user';


@Component({
  moduleId: module.id,
  selector: 'my-user-detail',
  template: `
    <div *ngIf="user">
      <h2>{{user.name}} details!</h2>
      <div>
        <label>id: </label>{{user.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="user.name" placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
      <button (click)="save()">Save</button>
    </div>

  `,

})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.update(this.user)
      .then(() => this.goBack());
  }

}
