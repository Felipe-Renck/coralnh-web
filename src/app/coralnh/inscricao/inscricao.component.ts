import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { User } from 'app/models/User';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, Headers } from '@angular/http';
import { UserService } from 'app/services/user.service';


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
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {

  user = new User();
  email = new FormControl('', [Validators.required, Validators.email]);
  lastDialogResult: string;
  private _dialog: MatDialog;
  maxDate = new Date(2005, 11, 31);

  public types = [
    { value: 'A+', viewValue: 'A+' },
    { value: 'A-', viewValue: 'A-' },
    { value: 'B+', viewValue: 'B+' },
    { value: 'B-', viewValue: 'B-' },
    { value: 'AB+', viewValue: 'AB+' },
    { value: 'AB-', viewValue: 'AB-' },
    { value: 'O+', viewValue: 'O+' },
    { value: 'O-', viewValue: 'O-' }
  ];

  constructor(private userService: UserService) {

  }

  openDialog() {
    const dialogRef = this._dialog.open(DialogContentComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  onSubmit() {
    const user = JSON.stringify(this.user);
    console.log('Submit');
    this.saveUser(user);
    console.log(user);
    alert('Sua inscrição foi confirmada ' + JSON.stringify(this.user));
  }

  saveUser = function (user) {
    console.log('SaveUser');
    console.log(user);
    return this.userService.saveUser(user).then(res => this.checkInscricao(res)).catch(res => this.checkInscricao(res));
  }

  checkInscricao = function (res) {
    if (res.status == "200") {
      alert("Mensagem enviada!");
    }
    else {
      alert("Ocorreu um problema ao tentar enviar o formulário. OBS: Por favor, tente mais tarde...");
    }
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }



  ngOnInit() {
  }
}

@Component({
  template: `
    <h2 mat-dialog-title>Delete all</h2>
    <mat-dialog-content>Are you sure?</mat-dialog-content>
    <mat-dialog-actions>
    <button mat-button mat-dialog-close>No</button>
    <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
    <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  `,
})

export class DialogContentComponent {
  constructor(public dialogRef: MatDialogRef<DialogContentComponent>) { }
}
