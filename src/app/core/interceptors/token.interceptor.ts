import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// import { TokenService } from '../services/token/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    // private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone({
      setHeaders: {
        // version: '2.2.7',
        // Authorization: `Bearer ${token}`
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU5MzY4NjUzNCwiZXhwIjoxNTkzNzcyOTM0fQ.xZDS0VA2RNXyQBx3FDwxDQkluZhvNGoKbGXyJvqU05A`
      }
    });

    return next.handle(clonedRequest);

    // return this.tokenService.getToken$()
    //   .pipe(
    //     mergeMap(token => {
    //       const clonedRequest = request.clone({
    //         setHeaders: {
    //           version: '2.2.7',
    //           Authorization: `Bearer ${token}`
    //         }
    //       });
    //       return next.handle(clonedRequest);
    //     })
    //   );
  }
}
