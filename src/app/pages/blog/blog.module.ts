import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

import { BlogListModule } from '../../components/blog-list/blog-list.module';
import { GetInTouchModule } from '../../components/get-in-touch/get-in-touch.module'

@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    BlogListModule,
    GetInTouchModule,
  ],
  providers: []
})
export class BlogModule { }
