import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpStatusCode } from '@shared/enums/http/http-status-code';
import { AuthorizationService } from '@app/pages/authorization/shared/providers/authorization.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError(error => this.errorHandler(error))
      );
  }

  private errorHandler(response: HttpErrorResponse): Observable<HttpEvent<any>> {
    if (response.status === HttpStatusCode.Unauthorized) {
      // TODO: make it via store.dispatch()
      this.authorizationService.signOut().subscribe(() => {
        this.router.navigate(['/login']);
        return throwError('Your security token has expired');
      });
    }
    return throwError(response.error);
  }
}
