import {Ng2StateDeclaration} from '@uirouter/angular';
import {UserComponent} from '../components/user/user.component';
import {UsersService} from '../services/users.service';
import {User} from '../models/user';
import {Transition} from '@uirouter/core';

export let userState: Ng2StateDeclaration = {
  name: 'user',
  url: '/users/:id',
  component: UserComponent,
  resolve: [
    {token: 'user', deps: [UsersService, Transition], resolveFn: getUser},
  ]
};

function getUser(userService: UsersService, transition: Transition): User | undefined {
  return userService.getUser(transition.params().id);
}
