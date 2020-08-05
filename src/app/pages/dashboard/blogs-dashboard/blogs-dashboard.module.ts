import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsDashboardRoutingModule } from './blogs-dashboard-routing.module';
import { BlogsDashboardComponent } from './blogs-dashboard.component';
import { BlogFormModule } from '../components/blog-form/blog-form.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [BlogsDashboardComponent],
  imports: [
    CommonModule,
    BlogsDashboardRoutingModule,
    BlogFormModule,

    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class BlogsDashboardModule { }
