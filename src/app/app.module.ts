import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetmethodComponent } from './getmethod/getmethod.component';
import { HttpClientModule } from '@angular/common/http';
import { PutComponent } from './put/put.component';

@NgModule({
  declarations: [
    AppComponent,
    GetmethodComponent,
    PutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
