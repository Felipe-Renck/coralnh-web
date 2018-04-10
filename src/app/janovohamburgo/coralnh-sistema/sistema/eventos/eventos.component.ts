import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { InscricaoEvento } from 'app/models/Inscricao_Evento';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, Headers } from '@angular/http';
import { EventosService } from 'app/services/eventos.service';
import { UserService } from 'app/services/user.service';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

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
    { value: '1', text: 'À vista' },
    { value: '2', text: '2x sem juros' },
    { value: '3', text: '3x sem juros' },
  ];


  public eventos = [
    { local: 'Gramado', data: '07/04/2018', hidden: true },
    { local: 'Punta Del Leste', data: '12/10/2018', descricao: 'Viagem para Punta Del Leste - Uruguai', hidden: false }
  ];

  modalMessage: string = "";
  hideEvento = false;
  disableButton = false;
  disableEsgotado = false;
  saveButtonText = "";
  validationButtonText = "";

  inscricaoEvento = new InscricaoEvento();
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

    this.saveButtonText = "Carregando...";
    this.disableButton = true;
    this.inscricaoEvento.DataEvento = new Date(this.eventos[0].data);
    this.inscricaoEvento.LocalEvento = this.eventos[0].local;
    this.eventoService.inscricao(this.inscricaoEvento).then(res => { this.checkInscricao(res) }).catch(res => { this.checkInscricao(res) });
  }

  validar = function (formValidation: FormControl) {
    if (formValidation.invalid) {
      console.log("Invalid: " + formValidation.invalid);
      return;
    }

    console.log(formValidation.value.RG);

    this.userService.getUserData(formValidation.value.RG);

  }


  createModal = function (result) {
    if (result == "success") {
      this.modalMessage = "Inscrição realizada com sucesso";
      jQuery('#modal-evento').modal('show');
    }
    else {
      this.modalMessage = "Ocorreu um erro ao tentar realizar sua inscrição! Favor entrar em contato com a Direção do coral.";
      this.hideLink = false;
      jQuery('#modal-evento').modal('show');
    }
  }

  checkInscritos = function (res) {
    if (res >= 90) {
      this.disableEsgotado = true;
    }
  }

  checkInscricao = function (res) {
    this.disableButton = false;
    this.buttonText = "Inscrever";
    if (res == 200) {
      this.createModal("success");
      // Inscrição realizada com sucesso");
    }
    else {
      this.createModal("error");
      //alert("Ocorreu um erro ao tentar realizar sua inscrição! Favor entrar em contato com a Direção do coral.");
    }
  }

}
