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
import { promise } from 'selenium-webdriver';



@Injectable()
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  saveUser(user: User): Promise<any> {

    console.log('SaveUserService');
    console.log(user);

    return this.http.post('https://coralnh-server.herokuapp.com/user', user, this.httpOptions).toPromise();

  }

  getAllUsers(usuario: string, senha: string) {
    return this.http.get('https://coralnh-server.herokuapp.com/list-users?usuario=' + usuario + '&senha=' + senha, this.httpOptions);
  }

  getUserData(RG: string) {
    console.log("USER SERVICE");
    console.log("RG" + RG);
    return this.http.get('https://coralnh-server.herokuapp.com/userData', { params: { RG: RG } }).toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
