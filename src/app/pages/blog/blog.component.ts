import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogsService } from '@services/blogs.service';
import { Blog } from '@models/blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs$: Observable<Blog[]> = this.blogsService.blogs$;

  constructor(
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.blogsService.getPosts();
  }
}
