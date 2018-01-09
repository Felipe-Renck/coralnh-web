import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';
import { CoralnhComponent } from './coralnh/coralnh/coralnh.component';
import { JanovohamburgoComponent } from './janovohamburgo/janovohamburgo/janovohamburgo.component';

const appRoutes: Routes = [
  { path: 'index', component: JanovohamburgoComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'coralnh', component: CoralnhComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoralnhComponent,
    JanovohamburgoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
