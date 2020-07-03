import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
// import { utc as moment } from 'moment';

import { TokenService } from '@services/token/token.service';
import { environment } from '@env/environment';

export interface ISignInDataResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  public signIn({ email, pass }) {
    return this.http.post(`${environment.apiURL}/login`, { email, pass })
      .pipe(
        catchError(error => of(error)),
        map((data: ISignInDataResponse) => this.tokenService.setToken(data.token))
      );
  }

  public signOut() {
    return of(this.tokenService.removeToken());
  }

  public isAuthenticated(): Observable<boolean> {
    return this.tokenService.getToken$()
      .pipe(
        map((token: string) => {
          if (token) {
            const isValid = this.isUserValid(token);
            if (!isValid) {
              this.tokenService.removeToken();
            }
            return isValid;
          }
          return false;
        })
      );
  }

  private isUserValid(token: string): boolean {
    const encoded = token.split('.')[1];
    const user = JSON.parse(this.tokenService.urlBase64Decode(encoded));
    // return !!user && (user.exp > moment().unix());
    return !!user;
  }
}
