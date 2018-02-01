import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Optional } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
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

import { MatFormFieldModule } from '@angular/material/form-field'

import { ContatoService } from './services/contato.service';

import { AppComponent } from './app.component';
import { JanovohamburgoComponent } from './janovohamburgo/janovohamburgo/janovohamburgo.component';
import { VerticalMaisComponent } from './vertical-mais/vertical-mais.component';
import { CoralnhComponent } from './coralnh/coralnh/coralnh.component';
import { CoralnhgaleriaComponent } from 'app/coralnh/coralnhgaleria/coralnhgaleria.component';
import { CoralnhhomeComponent } from './coralnh/coralnhhome/coralnhhome.component';
import { CoralnhsobreComponent } from './coralnh/coralnhsobre/coralnhsobre.component';
import { CoralnhcalendarioComponent } from 'app/coralnh/coralnhcalendario/coralnhcalendario.component';
import { CoralnhcontatoComponent } from 'app/coralnh/coralnhcontato/coralnhcontato.component';
import { InscricaoComponent } from './coralnh/inscricao/inscricao.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: JanovohamburgoComponent, pathMatch: 'full' },
  {
    path: 'coralnh', component: CoralnhComponent,
    children:
      [{ path: '', redirectTo: 'coralnhhome', pathMatch: 'full' },
      { path: 'coralnhhome', component: CoralnhhomeComponent },
      { path: 'coralnhsobre', component: CoralnhsobreComponent },
      { path: 'coralnhgaleria', component: CoralnhgaleriaComponent },
      { path: 'coralnhcalendario', component: CoralnhcalendarioComponent },
      { path: 'coralnhcontato', component: CoralnhcontatoComponent },
      { path: 'inscricao', component: InscricaoComponent }
      ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CoralnhComponent,
    CoralnhhomeComponent,
    CoralnhsobreComponent,
    CoralnhcalendarioComponent,
    CoralnhcontatoComponent,
    CoralnhgaleriaComponent,
    JanovohamburgoComponent,
    VerticalMaisComponent,
    InscricaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
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
  ],
  providers: [ContatoService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
