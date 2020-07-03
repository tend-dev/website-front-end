import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Injection Tokens
import { LOCAL_STORAGE } from '@services/storage/local-storage.token';
// Factories
import { LocalStorageFactory } from '@services/storage/local-storage.factory';
// Interceptors
import { TokenInterceptor } from './interceptors/token.interceptor';


@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCAL_STORAGE,
      useValue: LocalStorageFactory.create()
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: PrefixInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptor,
    //   multi: true
    // },
    // AuthGuard,
    // LoginGuard
  ]
})
export class CoreModule {

}
