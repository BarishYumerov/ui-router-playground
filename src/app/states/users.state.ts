import {Ng2StateDeclaration} from '@uirouter/angular';
import {UsersComponent} from '../components/users/users.component';

export  let usersState: Ng2StateDeclaration = {
  name: 'users',
  url: '/users',
  component: UsersComponent
};
