import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';
import { GetInTouchModule } from '@components/get-in-touch/get-in-touch.module';


@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    PrivacyRoutingModule,
    GetInTouchModule
  ]
})
export class PrivacyModule { }
