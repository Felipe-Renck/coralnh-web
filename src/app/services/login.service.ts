import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpRequest, HttpResponse, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { LoggedUser } from 'app/models/LoggedUser';
@Injectable()
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  public login(loggedUser: LoggedUser): Promise<any> {
    console.log('login for' + loggedUser);
    return this.http.post('http://localhost:3002/login', loggedUser, this.httpOptions).toPromise();
  }

  public verifyToken(token): Promise<any> {
    return this.http.get('http://localhost:3002/verifyToken', { params: { token : token }}).toPromise();
  }
}
