import { Component, OnInit } from '@angular/core';
import { JsonPlaceHolderService } from './services/json-place-holder-service.service'
import { User } from './models/user';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import * as UserActions from './actions/users.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UsersCodingChallenge';
  initialLoad: boolean = false;
  initialUserData: User[] = [];

  constructor(
    private jsonPlaceHolderService: JsonPlaceHolderService,
    private store: Store<AppState>
    ) {
      this.getUsers();
  }

  // determines if the store needs to be initialied in the data store
  // Need to figure out why this part is not working correclty. Seems to initiate after each reload
  getUsers() {
    this.isInitalLoad();
    if (this.initialLoad) {
      this.jsonPlaceHolderService.getAllUsers().subscribe(users => {
        this.initialUserData = users;
        this.initialUserData.forEach(user => {
          this.store.dispatch(new UserActions.AddUser(user))
        });
      });
    }
  }

  // determine if the data has been initialized in the store yet 
  isInitalLoad() {
    this.store.select('user').subscribe(users => {
      if (users.length === 0) {
        this.initialLoad = true;
      } else {
        this.initialLoad = false;
      }
    })
  }

  ngOnInit() {
    
  }

}
