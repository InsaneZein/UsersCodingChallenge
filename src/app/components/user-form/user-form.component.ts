import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as UserActions from '../../actions/users.actions';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  users: Observable<User[]>;

  // Create the form based off the User model
  createForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        suite: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required),
        geo: new FormGroup({
          lat: new FormControl('', Validators.required),
          lng: new FormControl('', Validators.required)
        }) 
      }),
      phone: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      company: new FormGroup({
        name: new FormControl('', Validators.required),
        catchPhrase: new FormControl('', Validators.required),
        bs: new FormControl('', Validators.required)
      })
    });
  }

  addUser(newUser: User) {
    this.store.dispatch(new UserActions.AddUser(newUser))
  }
  
  constructor(private store: Store<AppState>) {
    this.users = store.select('user');
   }

  onSubmit() {
    console.log(this.userForm.value);
    this.addUser(this.userForm.value);
  }

  ngOnInit() {
    this.createForm();
  }

}
