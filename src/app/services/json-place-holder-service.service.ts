import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService{

  constructor(private http: HttpClient) { }

  private url: string = "https://jsonplaceholder.typicode.com";

  getAllUsers(): Observable<User[]> {
    return this.http.get<any>(this.url + '/users');
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<any>(this.url + '/posts');
  }

}
