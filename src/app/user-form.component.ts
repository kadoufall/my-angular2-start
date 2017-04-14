import {Component, OnInit} from '@angular/core';

import {User} from './user';
import {UserService} from './user-service';

@Component({
  moduleId: module.id,
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
})

export class UserFormComponent implements OnInit {
  model: User;
  locations: string[];
  submitted: boolean;

  constructor(private userService: UserService) {
    this.model = new User(-1, 'Test', 'Shanghai');
    this.locations = ['Shanghai', 'Beijing', 'Nanjing'];
    this.submitted = false;
  }

  ngOnInit(): void {
    this.model = new User(-1, 'Test', 'Shanghai');
    this.submitted = false;
  }


  onSubmit() {
    this.userService.getUsers().then(
      users => {
        let maxID = ++users[users.length - 1].id;
        let newUser = new User(maxID, this.model.name, this.model.location);
        this.userService.addUser(newUser).then((user) => {
          this.model = user;
          this.submitted = true;
        });
      }
    );
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
