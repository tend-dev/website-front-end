import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Blog } from '@models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogsSubject$ = new Subject<Blog[]>();
  public blogs$: Observable<Blog[]> = this.blogsSubject$.asObservable();

  private blogDetailSubject$ = new Subject<Blog>();
  public blog$: Observable<Blog> = this.blogDetailSubject$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getBlogs() {
    // ! For Html develop only.
    // Todo: implement whith api
    const url = environment.production === false ? '/assets/mock-data/blogs.json' : environment.apiURL + 'posts';

    this.http.get<Blog[]>(url)
      .subscribe(blogs => this.blogsSubject$.next(blogs));
  }

  getBlogById(id: string) {
    // ! For Html develop only.
    // Todo: implement whith api
    const isDev = environment.production === false;
    const url = isDev ? '/assets/mock-data/blogs.json' : `${environment.apiURL}posts/${id}`;

    if (isDev) {
      this.http.get<Blog[]>(url).pipe(
        map(blogs => blogs.find(blog => blog.id === id))
      ).subscribe(blog => this.blogDetailSubject$.next(blog));
    } else {
      this.http.get<Blog>(url)
        .subscribe(blog => this.blogDetailSubject$.next(blog));
    }
  }
}
