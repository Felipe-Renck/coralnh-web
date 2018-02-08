import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { METHODS } from 'http';
import { User } from 'app/models/User';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';



@Injectable()
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  saveUser(user: User): Promise<any> {

    console.log('SaveUserService');
    console.log(User);

    return this.http.post('http://localhost:3002/user', JSON.stringify(User), this.httpOptions).toPromise();

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
