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
    this.blogsSub = this.blogsService.getBlogPostsFromBubble().subscribe((data:any)=> {
      this.blogs = data.slice(0,3);
    });
  }

  ngOnDestroy() {
    this.blogsSub.unsubscribe();
  }

  getBlogs() {
    
  }
}
