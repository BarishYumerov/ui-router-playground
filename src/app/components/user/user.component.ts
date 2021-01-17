import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {StateService} from '@uirouter/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User | undefined;
  constructor(public stateService: StateService) {  }

  ngOnInit(): void {
    if (!this.user) {
      this.stateService.go('not-found');
    }
  }
}
