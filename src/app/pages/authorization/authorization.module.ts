import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationRoutingModule } from './authorization-routing.module';
// import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    // FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    // TranslateModule,
    CoreModule
  ]
})
export class AuthorizationModule { }
