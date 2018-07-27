import { Component, OnInit } from '@angular/core';
import { Contato } from 'models/Contato';
import { Http, Response } from "@angular/http";
import { ContatoService } from 'app/services/contato.service';


@Component({
  selector: 'app-coralnhcontato',
  templateUrl: './coralnhcontato.component.html',
  styleUrls: ['./coralnhcontato.component.css']
})
export class CoralnhcontatoComponent implements OnInit {

  message: string;

  contato = new Contato(0, '', '', '', '', '');

  constructor(private http: Http, private contatoService:ContatoService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.enviar();
  }

  enviar = function () {
     this.contatoService.enviarEmail(this.contato).subscribe(data => {this.checkEnvio(data), console.log(data)});
  }

  checkEnvio = function(res){
    console.log(res);
    if(res.status = 200){
      alert("Mensagem enviada!");
    }
  }
}
