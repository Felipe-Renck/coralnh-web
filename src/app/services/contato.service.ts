import { Injectable } from '@angular/core';
import { Contato } from 'app/models/Contato';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpRequest, HttpResponse, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { METHODS } from 'http';

@Injectable()
export class ContatoService {

  status: Number;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  enviarEmail(contato: Contato): Promise<any> {
    return this.http.post('https://coralnh-server.herokuapp.com/email', JSON.stringify(contato), this.httpOptions).toPromise();
  }

  // private extractData(value: Response): any | PromiseLike<any> {
  //   return Promise.resolve(value);
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }
}
