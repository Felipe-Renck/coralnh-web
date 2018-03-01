import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingModule } from 'ngx-loading';
import { CommonModule } from '@angular/common';

import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Optional } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule,
  MatToolbarModule, MatChipsModule, MatOptionModule,
  MatGridListModule, MatProgressBarModule, MatSliderModule,
  MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
  MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule,
  MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, NativeDateAdapter, DateAdapter } from '@angular/material';
import { DxSchedulerModule } from 'devextreme-angular';
import { MdlModule } from '@angular-mdl/core';
import { MdlDialogModule } from '@angular-mdl/core';


import { ContatoService } from './services/contato.service';
import { UserService } from './services/user.service';
import { CalendarService } from './services/calendar.service'
import { LoginService } from './services/login.service';

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
import { DialogContentComponent } from './coralnh/inscricao/inscricao.component';
import { PainelComponent } from './janovohamburgo/painel/painel.component';
import { ListaUsuariosStatusComponent } from './admin/lista-usuarios-status/lista-usuarios-status.component';
import { LoginComponent } from './coralnh/login/login.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: JanovohamburgoComponent, pathMatch: 'full' },
  { path: 'painel', component: PainelComponent, pathMatch: 'full' },
  { path: 'listausuarios', component: ListaUsuariosStatusComponent, pathMatch: 'full' },
  {
    path: 'coralnh', component: CoralnhComponent,
    children:
      [{ path: '', redirectTo: 'coralnhhome', pathMatch: 'full' },
      { path: 'coralnhhome', component: CoralnhhomeComponent },
      { path: 'coralnhsobre', component: CoralnhsobreComponent },
      { path: 'coralnhgaleria', component: CoralnhgaleriaComponent },
      { path: 'coralnhcalendario', component: CoralnhcalendarioComponent },
      { path: 'coralnhcontato', component: CoralnhcontatoComponent },
      { path: 'inscricao', component: InscricaoComponent },
      { path: 'login', component: LoginComponent }
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
    InscricaoComponent,
    DialogContentComponent,
    PainelComponent,
    ListaUsuariosStatusComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MdlDialogModule,
    LoadingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    HttpModule,
    DxSchedulerModule,
    HttpClientModule,
    MdlModule,
    ModalGalleryModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatChipsModule, MatOptionModule,
    MatGridListModule, MatProgressBarModule, MatSliderModule,
    MatSlideToggleModule, MatMenuModule, MatDialogModule,
    MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule,
    MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule,
    MatDatepickerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    FormsModule, ReactiveFormsModule,
    MdlModule, MdlDialogModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule,
    MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
    MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule,
    MatProgressSpinnerModule, MatTabsModule, MatListModule, MatDatepickerModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [ContatoService, UserService, CalendarService, LoginService, HttpModule,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
