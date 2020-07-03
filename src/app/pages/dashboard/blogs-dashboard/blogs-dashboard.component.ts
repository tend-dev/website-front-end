import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { EditBlogState, editBlog } from '@store/blog-state'
import { BlogsService } from '@services/blogs.service';
import { Blog } from '@models/blog.interface';

@Component({
  selector: 'app-blogs-dashboard',
  templateUrl: './blogs-dashboard.component.html',
  styleUrls: ['./blogs-dashboard.component.scss']
})
export class BlogsDashboardComponent implements OnInit {
  // public blogs$: Observable<Blog[]> = this.blogsService.blogs$;
  public blogs$: Observable<Blog[]>;
  public loading$: Observable<boolean>;

  constructor(
    private blogsService: BlogsService,
    private store: Store<EditBlogState>
  ) { }

  ngOnInit(): void {
    this.blogs$ = this.blogsService.entities$;
    this.loading$ = this.blogsService.loading$;

    this.getBlogs();
  }

  getBlogs() {
    this.blogsService.getBlogs();
  }

  delete(blog: Blog) {
    this.blogsService.delete(blog.id);
  }

  edit(blog: Blog) {
    this.store.dispatch(editBlog(blog));
  }

  trackByArticles(index: number, blog: Blog): string {
    return blog.id;
  }
}
