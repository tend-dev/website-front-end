import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareManagementComponent } from './care-management.component';
import { CareManagementTopicComponent } from './care-management-topic/care-management-topic.component';

const routes: Routes = [
  {
    path: '',
    component: CareManagementComponent,
    children: []
  },
  {
    path: ':id',
    component: CareManagementTopicComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareManagementRoutingModule { }
