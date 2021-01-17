import {Ng2StateDeclaration} from '@uirouter/angular';
import {UsersComponent} from '../components/users/users.component';
import {UsersService} from '../services/users.service';
import {User} from '../models/user';

export let usersState: Ng2StateDeclaration = {
  name: 'users',
  url: '/users',
  component: UsersComponent,
  resolve: [
    {token: 'users', deps: [UsersService], resolveFn: getUsers},
  ]
};

function getUsers(userService: UsersService): Array<User> {
  return userService.getUsers();
}
