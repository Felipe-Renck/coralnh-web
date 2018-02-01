import { Injectable } from '@angular/core';
import { Contato } from 'models/Contato';
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
    return this.http.post('http://localhost:3002/email',
      JSON.stringify(contato), this.httpOptions).toPromise().then(this.extractData).catch(this.handleError);
  }

  private extractData(value: Response): any | PromiseLike<any>{
    return Promise.resolve(value);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
