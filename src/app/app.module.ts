import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PokeService} from './poke.service';
import{HttpClientModule }  from '@angular/common/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
