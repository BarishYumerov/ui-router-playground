import {Ng2StateDeclaration} from '@uirouter/angular';
import {NotFoundComponent} from '../components/not-found/not-found.component';

export let notFoundState: Ng2StateDeclaration = {
  name: 'not-found',
  url: '/not-found',
  component: NotFoundComponent
};
