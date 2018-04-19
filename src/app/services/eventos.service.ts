import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpRequest, HttpResponse, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { InscricaoEvento } from 'app/models/Inscricao_Evento';
import { InscricaoViagem } from 'app/models/Inscricao_Viagem';
import { InscricaoComponent } from '../coralnh/inscricao/inscricao.component';

@Injectable()
export class EventosService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public inscricao(inscricaoEvento: InscricaoEvento): Promise<any> {

    console.log('Service');
    console.log(inscricaoEvento);

    return this.http.post('https://coralnh-server.herokuapp.com/evento', inscricaoEvento, this.httpOptions).toPromise();

  };

  public inscricaoViagem(inscricaoViagem: InscricaoViagem): Promise<any> {

    console.log('inscricaoViagem');
    console.log(inscricaoViagem);

    return this.http.post('http://localhost:3002/viagem', inscricaoViagem, this.httpOptions).toPromise();

  };

  public checkInscritos(): Promise<any> {

    return this.http.get('http://localhost:3002/inscritos', this.httpOptions).toPromise();
  }

  constructor(private http: HttpClient) {
  }


}
