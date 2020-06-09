import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list.component';
import { BlogElementComponent } from './blog-element/blog-element.component';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogElementComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BlogListComponent,
    BlogElementComponent
  ]
})
export class BlogListModule { }
