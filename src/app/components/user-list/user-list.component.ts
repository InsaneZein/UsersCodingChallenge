import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import * as UserActions from '../../actions/users.actions';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private store: Store<AppState>, private router: Router) { 
    this.users = store.select("user");
  }

  goToUserDetails(id: number) {
    this.router.navigate(['/user-details', id])
  }

  createUser() {
    this.router.navigate(['/create-user']);
  }

  ngOnInit() {
  }

}
