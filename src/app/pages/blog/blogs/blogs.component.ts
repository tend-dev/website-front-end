import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { BlogsService } from '@services/blogs.service';
import { Blog } from '@models/blog.interface';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  public blogs$: any[];
  public subject = new Subject<string>();
  constructor(
    private blogsService: BlogsService
  ) { }
  
  ngOnInit(): void {
    let output = [];
    this.blogsService.getBlogPostsFromBubble().subscribe((data:any)=> {
      this.blogs$ = data;
      console.log(this.blogs$);
    });
  }

}
