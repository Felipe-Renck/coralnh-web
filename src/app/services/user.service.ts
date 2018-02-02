import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { METHODS } from 'http';
import { User } from 'models/User';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  saveUser(user: User) {
    console.log('SaveUserService');
    return this.http.post('http://localhost:3002/user', JSON.stringify(User), this.httpOptions)
  }

}
