import { Injectable } from '@angular/core';
import { Contato } from 'models/Contato';
import { Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { METHODS } from 'http';
import { Headers } from '@angular/http/src/headers';

@Injectable()
export class ContatoService {

  status: Number;

  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  enviarEmail(contato: Contato): Promise<any> {
    return this.http.post('http://localhost:3002/email',
      JSON.stringify(contato),
      new RequestOptions({ headers: this.headers })).toPromise().then(this.extractData).catch(this.handleError);
  }

  private extractData(value: Response): any | PromiseLike<any>{
    return Promise.resolve(value);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
