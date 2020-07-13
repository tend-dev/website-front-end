import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BlogsService } from '@services/blogs.service';
import { environment } from '@env/environment';
import { Blog } from '@models/blog.interface';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.scss']
})
export class BlogAreaComponent implements OnInit, OnDestroy {
  blogs: Blog[];
  backEndURL = '';
  private blogsSub: Subscription;

  constructor(
    private blogsService: BlogsService
  ) {
    this.backEndURL = environment.backEndURL;
  }

  ngOnInit(): void {
    this.blogsSub = this.blogsService.entities$.subscribe(blogs => {
      this.blogs = blogs;
    });

    this.getBlogs();
  }

  ngOnDestroy() {
    this.blogsSub.unsubscribe();
  }

  getBlogs() {
    this.blogsService.getWithQuery({
      'page': '1',
      'perPage': '3',
      'sort': 'descr'
    });
  }
}
