import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UIRouterModule } from '@uirouter/angular';
import {APP_STATES} from './app.states';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      initial: { state: 'users' }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
