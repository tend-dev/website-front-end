import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsDashboardRoutingModule } from './blogs-dashboard-routing.module';
import { BlogsDashboardComponent } from './blogs-dashboard.component';
import { BlogFormModule } from '../components/blog-form/blog-form.module';


@NgModule({
  declarations: [BlogsDashboardComponent],
  imports: [
    CommonModule,
    BlogsDashboardRoutingModule,

    BlogFormModule
  ]
})
export class BlogsDashboardModule { }