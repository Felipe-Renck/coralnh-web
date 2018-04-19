import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { InscricaoEvento } from 'app/models/Inscricao_Evento';
import { InscricaoViagem } from 'app/models/Inscricao_Viagem';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, Headers } from '@angular/http';
import { EventosService } from 'app/services/eventos.service';
import { UserService } from 'app/services/user.service';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { User } from 'app/models/User';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDatepickerModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatFormField,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { DeclareFunctionStmt } from '@angular/compiler';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {


  public values = [
    { value: 'Carro', text: 'Carro' },
    { value: 'Onibus', text: 'Ônibus' }
  ];

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  pagamentos = [
  ];

  forma_pagamento = [
    { value: 'dinheiro', text: 'Dinheiro' },
    { value: 'cartao', text: 'Cartão de Crédito' },
  ];


  public eventos = [
    { local: 'Gramado', data: '07/04/2018', hidden: true },
    { local: 'São Leopoldo', data: new Date('2018/4/21'), horario: '8:00h', endereco: 'Rua São Pedro,621 - Centro', valor: 'R$5,00', hidden: false },
    {
      local: 'Punta Del Leste',
      data: '12/10/2018 a 14/10/2018',
      descricao: 'Viagem Punta Del Leste / Chuy',
      valor: 'R$450,00', hidden: true
    }
  ];

  modalMessage: string = "";
  disableButton = false;
  flagEsgotado = true;
  saveButtonText = "";
  validationButtonText = "";

  user = new User();

  userEmail = "";
  userCelular = "";
  userNome = "";

  inscricaoEvento = new InscricaoEvento();
  inscricaoViagem = new InscricaoViagem();
  public constructor(private eventoService: EventosService, private userService: UserService) {
  }

  ngOnInit() {
    this.validationButtonText = 'Validar';
    this.saveButtonText = 'Inscrever';
    this.eventoService.checkInscritos().then(res => { this.checkInscritos(res) }).catch(res => { this.checkInscritos(res) });

  }

  showEvento = function () {
    this.hideEvento = !this.hideEvento;
    console.log(this.hideEvento);
  }

  salvar = function (form: FormControl) {
    if (form.invalid) {
      return;
    }

    //console.log(form.value.Nome);
    this.saveButtonText = "Carregando...";
    this.disableButton = true;
    this.inscricaoEvento.DataEvento = this.eventos[1].data;
    this.inscricaoEvento.LocalEvento = this.eventos[1].local;
    console.log(this.eventos[1].data);
    console.log(this.inscricaoEvento.DataEvento);
    this.eventoService.inscricao(this.inscricaoEvento).then(res => { this.checkInscricao(res) }).catch(res => { this.checkInscricao(res) });
  }

  salvarViagem = function (form: FormControl) {
    if (form.invalid) {
      console.log(form.invalid);
      return;
    }

    this.saveButtonText = "Carregando...";

    console.log(this.inscricaoViagem);
    this.eventoService.inscricaoViagem(this.inscricaoViagem).then(res => { this.checkInscricao(res) }).catch(res => { this.checkInscricao(res) });
  }

  validar = function (formValidation: FormControl) {
    if (formValidation.invalid) {
      console.log("Invalid: " + formValidation.invalid);
      return;
    }
    this.validationButtonText = "Carregando...";
    this.disableButton = true;
    console.log(formValidation.value.RG);

    this.userService.getUserData(formValidation.value.RG).then(res => this.populateFields(res));
  }


  createModal = function (result) {
    if (result == "success") {
      this.modalMessage = "Inscrição realizada com sucesso";
      jQuery('#modal-evento').modal('show');
    }
    else if (result == "duplicate") {
      this.modalMessage = "Usuário já cadastrado";
      jQuery('#modal-evento').modal('show');
    }
    else {
      this.modalMessage = "Ocorreu um erro ao tentar realizar sua inscrição! Favor entrar em contato com a Direção do coral.";
      this.hideLink = false;
      jQuery('#modal-evento').modal('show');
    }
  }

  checkInscritos = function (res) {
    if (res >= 46) {
      this.flagEsgotado = false;
    }
  }

  checkInscricao = function (res) {
    this.disableButton = false;
    this.buttonText = "Inscrever";
    console.log(res);
    if (res == 200) {
      this.createModal("success");
      // Inscrição realizada com sucesso");
      console.log(1);
    }
    else {
      console.log(1);
      this.createModal("error");
    }
  }

  populateFields = function (res) {

    console.log("POPULATE FIELDS: " + res);
    this.validationButtonText = "Validar";
    this.disableButton = false;
    this.user = res;
    this.userNome = this.user[0].nome;
    this.userCelular = this.user[0].celular;
    this.userEmail = this.user[0].email;

    this.inscricaoViagem.Nome = this.user[0].nome;
    this.inscricaoViagem.Email = this.user[0].email;
    this.inscricaoViagem.Celular = this.user[0].celular;
  }

  onChange = function (element) {
    console.log(element.value);

    if (element.value == this.forma_pagamento[0].value) {
      this.pagamentos = [
        { value: '1', text: 'À vista' },
        { value: '2', text: '2x sem juros' },
        { value: '3', text: '3x sem juros' },
      ];
    }
    if (element.value == this.forma_pagamento[1].value) {
      this.pagamentos = [
        { value: '1', text: 'À vista' },
        { value: '2', text: '2x sem juros' },
        { value: '3', text: '3x sem juros' },
        { value: '4', text: '4x sem juros' },
        { value: '5', text: '5x sem juros' },
        { value: '6', text: '6x sem juros' },
      ];
    }
  }
}

