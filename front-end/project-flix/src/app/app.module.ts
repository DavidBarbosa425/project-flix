import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material-module/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SearchModule } from './share/search/search.module';





@NgModule({
  declarations: [
    AppComponent,


    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SearchModule,
    HttpClientModule,
    CommonModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
