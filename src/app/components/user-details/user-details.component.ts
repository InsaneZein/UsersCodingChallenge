import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { User } from '../../models/user';
import { Post } from '../../models/post';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder-service.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User

  constructor(
    private route: ActivatedRoute, 
    private store: Store<AppState>,
    private jsonPlaceHolderService: JsonPlaceHolderService) { }

  // get user data from ngrx store
  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.select('user').subscribe(users => {
      this.user = users.find(user => user.id === id)
    });
  }


  ngOnInit(): void {
    this.getUser();
  }

}
