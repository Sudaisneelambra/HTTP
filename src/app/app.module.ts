import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetmethodComponent } from './getmethod/getmethod.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PutComponent } from './put/put.component';
import { InteceptorComponent } from './inteceptor/inteceptor.component';
import { LoggingInterceptor } from './auth-intercepter';

@NgModule({
  declarations: [
    AppComponent,
    GetmethodComponent,
    PutComponent,
    InteceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
