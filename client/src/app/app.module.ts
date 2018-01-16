import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { Optional } from "@angular/core";

import { AppComponent } from './app.component';
import { CoralnhComponent } from './coralnh/coralnh/coralnh.component';
import { JanovohamburgoComponent } from './janovohamburgo/janovohamburgo/janovohamburgo.component';
import { VerticalMaisComponent } from './vertical-mais/vertical-mais.component';

const appRoutes: Routes = [
  { path: 'index', component: JanovohamburgoComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'coralnh', component: CoralnhComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoralnhComponent,
    JanovohamburgoComponent,
    VerticalMaisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
