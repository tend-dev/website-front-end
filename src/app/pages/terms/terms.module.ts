import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';
import { GetInTouchModule } from '@components/get-in-touch/get-in-touch.module';


@NgModule({
  declarations: [
    TermsComponent
  ],
  imports: [
    CommonModule,
    TermsRoutingModule,
    GetInTouchModule
  ]
})
export class TermsModule { }
