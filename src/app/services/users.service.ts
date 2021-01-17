import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class UsersService {
  private users: Array<User> = [
    {id: '1fdt5423', name: 'ivan', age: 12},
    {id: '2dgfgf34', name: 'pesho', age: 32},
    {id: '3gfd3413', name: 'kiro', age: 55},
  ];

  constructor(private http: HttpClient) {
  }

  public getUsers(): Array<User> {
    return this.users;
  }

  public getUser(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
