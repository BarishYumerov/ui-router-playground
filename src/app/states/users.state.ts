import {Ng2StateDeclaration} from '@uirouter/angular';
import {UserComponent} from '../components/user/user.component';

export  let usersState: Ng2StateDeclaration = {
  name: 'users',
  url: '/users',
  component: UserComponent
};
