import { Component, OnInit } from '@angular/core';
import { Contato } from 'app/models/Contato';
import { Http, Response } from '@angular/http';
import { ContatoService } from 'app/services/contato.service';


@Component({
  selector: 'app-coralnhcontato',
  templateUrl: './coralnhcontato.component.html',
  styleUrls: ['./coralnhcontato.component.css']
})
export class CoralnhcontatoComponent implements OnInit {

  message: string;

  contato = new Contato(0, '', '', '', '', '');

  constructor(private http: Http, private contatoService: ContatoService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.enviar();
  }

  enviar = function () {
    console.log("ENVIAR");
    return this.contatoService.enviarEmail(this.contato).then(res => this.checkEnvio(res)).catch(res => this.checkEnvio(res));
  }

  checkEnvio = function (res) {
    if (res.status == "200") {
      alert("Mensagem enviada!");
    }
    else {
      alert("Ocorreu um problema ao tentar enviar o formulário. OBS: Por favor, tente mais tarde...");
    }
  }
}
