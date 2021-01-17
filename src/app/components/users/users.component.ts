import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() users: Array<User> = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.users);
  }
}
