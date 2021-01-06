import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareManagementRoutingModule } from './care-management-routing.module';
import { CareManagementComponent } from './care-management.component';
import { CareManagementTopicComponent } from './care-management-topic/care-management-topic.component';
import { GetInTouchModule } from '@components/get-in-touch/get-in-touch.module';


@NgModule({
  declarations: [
    CareManagementComponent,
    CareManagementTopicComponent
  ],
  imports: [
    CommonModule,
    CareManagementRoutingModule,
    GetInTouchModule
  ]
})
export class CareManagementModule { }
