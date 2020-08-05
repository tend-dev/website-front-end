import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { EditBlogState, editBlog } from '@store/blog-state'
import { BlogsService } from '@services/blogs.service';
import { Blog } from '@models/blog.interface';
import { environment } from '@env/environment';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-blogs-dashboard',
  templateUrl: './blogs-dashboard.component.html',
  styleUrls: ['./blogs-dashboard.component.scss']
})
export class BlogsDashboardComponent implements OnInit, OnDestroy {
  public backEndURL = environment.backEndURL;
  public displayedColumns: string[] = ['id', 'title', 'thumbnail', 'created', 'author', 'buttons'];
  public dataSource = new MatTableDataSource<Blog>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  private blogsSub: Subscription;

  constructor(
    private blogsService: BlogsService,
    private store: Store<EditBlogState>
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    this.blogsSub = this.blogsService.entities$.subscribe(blogs => {
      this.dataSource.data = blogs;
    })

    this.getBlogs();
  }

  ngOnDestroy(): void {
    this.blogsSub.unsubscribe();
  }

  getBlogs() {
    this.blogsService.getWithQuery({
      'page': '1',
      'perPage': '20'
    });
  }

  delete(blog: Blog) {
    this.blogsService.deleteBlog(blog.id)
    .subscribe(result => {
      this.blogsService.removeOneFromCache(blog.id);
    });
  }

  edit(blog: Blog) {
    this.store.dispatch(editBlog(blog));
  }

  trackByArticles(index: number, blog: Blog): string {
    return blog.id;
  }
}
