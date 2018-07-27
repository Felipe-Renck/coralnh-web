import { Injectable } from '@angular/core';
import { Contato } from 'models/Contato';
import { Http, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { METHODS } from 'http';
import { Headers } from '@angular/http/src/headers';

@Injectable()
export class ContatoService {

  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  enviarEmail(contato:Contato) {
    return this.http.post('http://localhost:3002/email', JSON.stringify(contato), new RequestOptions({headers:this.headers})).map((res) => res);
  }
}
