import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { first } from 'rxjs/operators';

import { StorageService } from '@services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: ReplaySubject<string>;

  constructor(private storage: StorageService) {
    this.init();
  }

  public setToken(token) {
    this.token.next(token);
    return this.storage.set('token', token);
  }

  public removeToken() {
    this.token.next(null);
    return this.storage.remove('token');
  }

  public getToken$(): Observable<string> {
    return this.token.asObservable().pipe(first());
  }

  public urlBase64Decode(token: string) {
    let output = token.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw new Error('Illegal base64url string!');
    }
    return window.atob(output);
  }

  private async init() {
    this.token = new ReplaySubject<string>(1);
    const localData = await this.storage.get('token');
    this.token.next(localData);
  }
}
