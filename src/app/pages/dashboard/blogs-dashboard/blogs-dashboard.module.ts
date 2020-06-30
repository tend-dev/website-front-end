import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsDashboardRoutingModule } from './blogs-dashboard-routing.module';
import { BlogsDashboardComponent } from './blogs-dashboard.component';


@NgModule({
  declarations: [BlogsDashboardComponent],
  imports: [
    CommonModule,
    BlogsDashboardRoutingModule
  ]
})
export class BlogsDashboardModule { }
