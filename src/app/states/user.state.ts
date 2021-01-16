import {Ng2StateDeclaration} from '@uirouter/angular';
import {UserComponent} from '../components/user/user.component';

export  let userState: Ng2StateDeclaration = {
  name: 'user',
  url: '/users/:id',
  component: UserComponent
};
