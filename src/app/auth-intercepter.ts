// logging-interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    // Log the start of the request
    console.log(`Request started for ${request.url}`);
    console.log(request);

    const mpodified=request.clone({
      headers:request.headers.append('kunjani','shinuoun'),
      params:request.params.append('hellow world','hi')
    })
    // Pass the request to the next handler and log the end
    return next.handle(mpodified).pipe(tap((event)=>{
      console.log(event);
      if(event.type===HttpEventType.Response)
      {
        console.log(event.body);
        
      }
      
    }))
  }
}
