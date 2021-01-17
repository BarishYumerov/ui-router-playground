import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UIRouterModule } from '@uirouter/angular';
import {APP_STATES} from './app.states';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      initial: { state: 'users' }
    }),
    HttpClientModule,
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
