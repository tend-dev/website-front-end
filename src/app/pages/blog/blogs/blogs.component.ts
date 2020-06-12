import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogsService } from '@services/blogs.service';
import { Blog } from '@models/blog.interface';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  public blogs$: Observable<Blog[]> = this.blogsService.blogs$;

  constructor(
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.blogsService.getBlogs();
  }
}
