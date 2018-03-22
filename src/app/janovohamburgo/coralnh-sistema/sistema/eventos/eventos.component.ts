import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { InscricaoEvento } from 'app/models/Inscricao_Evento';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, Headers } from '@angular/http';
import { EventosService } from 'app/services/eventos.service';
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

  inscricaoEvento = new InscricaoEvento();
  public 
  constructor(private eventoService: EventosService) {
  }

  ngOnInit() {

  }

  showEvento = function () {
    this.hideEvento = !this.hideEvento;
    console.log(this.hideEvento);
  }

  salvar = function (form: FormControl) {
    console.log(form.invalid);
    if (form.invalid) {
      return;
    }

    this.inscricaoEvento.DataEvento = new Date('07/04/2018');
    this.inscricaoEvento.LocalEvento = 'Gramado';
    console.log(this.inscricaoEvento);
    this.eventoService.inscricao(this.inscricaoEvento);

  }

}
