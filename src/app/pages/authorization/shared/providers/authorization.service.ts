import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, pluck, tap } from 'rxjs/operators';
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

  // ! { "email": "zx@x.com", "pass": "123" } todo: delete
  public signIn({ email, pass }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post(`${environment.apiURL}/api/login`, { email, pass }, {headers: {
      'Content-Type': 'application/json'
    }})
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
