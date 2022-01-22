import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateSimplifyService } from 'projects/date-simplify/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DateSimplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
