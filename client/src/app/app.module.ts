import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Optional } from '@angular/core';

import { AppComponent } from './app.component';
import { JanovohamburgoComponent } from './janovohamburgo/janovohamburgo/janovohamburgo.component';
import { VerticalMaisComponent } from './vertical-mais/vertical-mais.component';
import { CoralnhComponent } from './coralnh/coralnh/coralnh.component';
import { CoralnhgaleriaComponent } from 'app/coralnh/coralnhgaleria/coralnhgaleria.component';
import { CoralnhhomeComponent } from './coralnh/coralnhhome/coralnhhome.component';
import { CoralnhsobreComponent } from './coralnh/coralnhsobre/coralnhsobre.component';
import { CoralnhcalendarioComponent } from 'app/coralnh/coralnhcalendario/coralnhcalendario.component';
import { CoralnhcontatoComponent } from 'app/coralnh/coralnhcontato/coralnhcontato.component';
import {CalendarComponent} from 'ap-angular2-fullcalendar';

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
      { path: 'coralnhcontato', component: CoralnhcontatoComponent }]
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
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
