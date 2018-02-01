import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Address } from './address';
import { FormControl, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
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
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {

  address = new Address();
  email = new FormControl('', [Validators.required, Validators.email]);

  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.address));
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor() {

  }

  ngOnInit() {
  }

}
