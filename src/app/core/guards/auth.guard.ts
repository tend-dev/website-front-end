import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AuthorizationService } from '../../pages/authorization/shared/providers/authorization.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.authorizationService.isAuthenticated()
      .pipe(
        map(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigate(['/login']);
          }
          return isAuthenticated;
        })
      );
  }
}
