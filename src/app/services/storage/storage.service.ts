import { Inject, Injectable } from '@angular/core';

import { LOCAL_STORAGE } from './local-storage.token';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: Promise<any>) {}

  public set(key: string, data: any) {
    const stringifiedData = JSON.stringify(data);
    return this.storage.then(storage => {
      storage.setItem(key, stringifiedData);
    });
  }

  public get(key: string) {
    return this.storage
      .then(storage => {
        try {
          const data = storage.getItem(key);
          return JSON.parse(data);
        } catch (e) {
          console.warn('Failed to parse stored data');
          return null;
        }
      });
  }

  public remove(key: string) {
    return this.storage.then(storage => storage.removeItem(key));
  }
}
