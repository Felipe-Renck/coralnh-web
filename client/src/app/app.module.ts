import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoralnhComponent } from './coralnh/coralnh/coralnh.component';
import { JanovohamburgoComponent } from './janovohamburgo/janovohamburgo/janovohamburgo.component';

@NgModule({
  declarations: [
    AppComponent,
    CoralnhComponent,
    JanovohamburgoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
